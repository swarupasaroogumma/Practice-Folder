const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const JWT_SECRET = 'your_secret_key';
const users = [];
const todos = [];

app.get("/", function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})
// Signup
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (users.find(user => user.username === username)) {
        return res.status(400).send({ message: 'User already exists!' });
    }
    users.push({ username, password });
    res.send({ message: 'Signup successful!' });
});

// Signin
app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(400).send({ message: 'Invalid credentials!' });
    }
    const token = jwt.sign({ username }, JWT_SECRET);
    res.send({ token });
});

// Middleware for authentication
function authenticate(req, res, next) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.username = decoded.username;
        next();
    } catch {
        res.status(401).send({ message: 'Unauthorized!' });
    }
}

// Get todos
app.get('/todos', authenticate, (req, res) => {
    const userTodos = todos.filter(todo => todo.username === req.username);
    res.send({ todos: userTodos });
});

// Add todo
app.post('/todos', authenticate, (req, res) => {
    const { task } = req.body;
    todos.push({ id: todos.length + 1, username: req.username, task, completed: false });
    res.send({ message: 'TODO added!' });
});

// Toggle todo
app.put('/todos/:id', authenticate, (req, res) => {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id) && todo.username === req.username);
    if (todo) {
        todo.completed = !todo.completed;
        res.send({ message: 'TODO updated!' });
    } else {
        res.status(404).send({ message: 'TODO not found!' });
    }
});

// Start server
app.listen(3002, () => console.log('Server running on http://localhost:3002'));
