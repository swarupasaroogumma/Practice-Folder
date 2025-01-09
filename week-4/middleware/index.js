const express = require('express');
const app = express();

// Middleware
function agelimit(req, res, next) {
    const age = req.query.age; // Convert age to a number
    if (age >= 10) {
        next();
    } else {
        res.json({
            msg: "You are not eligible"
        });
    }
}

// Apply middleware globally
app.use(agelimit);

// Route
app.get("/", function (req, res) {
    res.json({
        msg: "Route 1 is done"
    });
});

// Additional route example (different path)
app.get("/route2", function (req, res) {
    res.json({
        msg: "Route 2 is done"
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
