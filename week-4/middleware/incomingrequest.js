const express = require('express');
const app = express();

// Middleware to log incoming requests
function logRequests(req, res, next) {
    const method = req.method; // HTTP method (GET, POST, etc.)
    const url = req.url; // Requested URL
    const time = new Date().toISOString(); // Timestamp of the request

    console.log(`[${time}] ${method} request to ${url}`);

    // Call next() to pass control to the next middleware or route handler
    next();
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

module.exports = app;
