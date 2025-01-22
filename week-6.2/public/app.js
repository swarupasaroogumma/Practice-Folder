const API_URL = "http://localhost:3000";
let token = localStorage.getItem("token");

function showTodos() {
    document.getElementById("auth-container").style.display = "none";
    document.getElementById("todo-container").style.display = "block";
    fetchTodos();
}

function showAuth() {
    document.getElementById("auth-container").style.display = "block";
    document.getElementById("todo-container").style.display = "none";
}

async function signup() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    alert("Signed up successfully. Please sign in.");
}

async function signin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const res = await fetch(`${API_URL}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.token) {
        localStorage.setItem("token", data.token);
        token = data.token;
        showTodos();
    } else {
        alert("Invalid credentials.");
    }
}

async function fetchTodos() {
    const res = await fetch(`${API_URL}/todos`, {
        headers: { authorization: token },
    });
    const todos = await res.json();
    const list = document.getElementById("todo-list");
    list.innerHTML = "";
    todos.forEach((todo) => {
        const item = document.createElement("li");
        item.innerHTML = `
            <span>${todo.title} - ${todo.done ? "Done" : "Pending"}</span>
            <button onclick="toggleDone(${todo.id}, ${todo.done})">Mark as ${
            todo.done ? "Pending" : "Done"
        }</button>
            <button onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        list.appendChild(item);
    });
}

async function addTodo() {
    const title = document.getElementById("todo-title").value;
    await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: token,
        },
        body: JSON.stringify({ title }),
    });
    fetchTodos();
}

async function toggleDone(id, done) {
    await fetch(`${API_URL}/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: token,
        },
        body: JSON.stringify({ done: !done }),
    });
    fetchTodos();
}

async function deleteTodo(id) {
    await fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE",
        headers: { authorization: token },
    });
    fetchTodos();
}

function logout() {
    localStorage.removeItem("token");
    token = null;
    showAuth();
}

if (token) {
    showTodos();
} else {
    showAuth();
}
