const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 3000;
const JWT_SECRET = "your_secret_key";

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

// Mock Database
let users = [];
let todos = [];

// Helper: Authenticate Middleware
function authenticate(req, res, next) {
    const token = req.headers.authorization;
    try {
        const user = jwt.verify(token, JWT_SECRET);
        req.user = user;
        next();
    } catch {
        res.status(401).send("Invalid or expired token");
    }
}

// Routes
app.post("/signup", (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ username, password: hashedPassword });
    res.send("User signed up successfully!");
});

app.post("/signin", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).send("Invalid credentials");
    }
    const token = jwt.sign({ username }, JWT_SECRET);
    res.send({ token });
});

app.get("/todos", authenticate, (req, res) => {
    const userTodos = todos.filter((todo) => todo.username === req.user.username);
    res.send(userTodos);
});

app.post("/todos", authenticate, (req, res) => {
    const { title } = req.body;
    todos.push({ id: Date.now(), username: req.user.username, title, done: false });
    res.send("TODO added successfully!");
});

app.put("/todos/:id", authenticate, (req, res) => {
    const { id } = req.params;
    const { title, done } = req.body;
    const todo = todos.find((t) => t.id == id && t.username === req.user.username);
    if (!todo) return res.status(404).send("TODO not found");
    todo.title = title !== undefined ? title : todo.title;
    todo.done = done !== undefined ? done : todo.done;
    res.send("TODO updated successfully!");
});

app.delete("/todos/:id", authenticate, (req, res) => {
    const { id } = req.params;
    todos = todos.filter((t) => !(t.id == id && t.username === req.user.username));
    res.send("TODO deleted successfully!");
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
