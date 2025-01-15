const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ghshskikkdddjdjdjdj";

const app = express();
app.use(express.json());

const users = [];

// Serve frontend
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// Signup route
app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    users.push({ username, password });
    res.send("Successfully signed up");
});

// Signin route
app.post("/sigin", function (req, res) {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ username: user.username }, JWT_SECRET);
        res.send({ token });
    } else {
        res.status(403).send("Invalid username or password");
    }
});

// Authentication middleware
function auth(req, res, next) {
    const authHeader = req.headers.authorization;
;
    try {
        const verifiedToken = jwt.verify(authHeader, JWT_SECRET);
        req.username = verifiedToken.username;
        next();
    } catch (error) {
        console.error("Token verification error:", error.message);
        res.status(403).send("Invalid or expired token");
    }
}

// Protected route
app.get("/myinfo", auth, function (req, res) {
    const user = users.find((u) => u.username === req.username);

    if (user) {
        res.send({ username: user.username });
    } else {
        res.status(401).send({ message: "Unauthorized" });
    }
});

app.listen(3002, () => console.log("Server running on http://localhost:3002"));
