// const express= require('express')
// const app =express();
// let requestCount = 0;
 
// app.use(function(req,res,next){
//     requestCount=requestCount+1;
//     next();
// })
// app.get('/user', function(req, res) {
//     res.status(200).json({ name: 'john' });
//   });
  
//   app.post('/user', function(req, res) {
//     res.status(200).json({ msg: 'created dummy user' });
//   });
  
//   app.get('/requestCount', function(req, res) {
//     res.status(200).json({ requestCount });
//   });
  

const express = require('express');
const app = express();
let requestCount = 0;

// Middleware to count requests
app.use(function (req, res, next) {
    if (req.path !== '/favicon.ico') { // Ignore favicon requests
        requestCount++;
    }
    next();
});

// Route for '/user' (GET)
app.get('/user', function (req, res) {
    res.status(200).json({ name: 'john' });
});

// Route for '/user' (POST)
app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

// Route to check request count
app.get('/requestCount', function (req, res) {
    res.status(200).json({ requestCount });
});

// Handle favicon requests
app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // Send a No Content response
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.listen(3000);