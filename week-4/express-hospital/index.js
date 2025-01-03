const express = require('express');
const users = [
    {
        name: "John",
        kidneys: [
            { healthy: false },
            { healthy: true }
        ]
    }
];

const app = express();
app.use(express.json());

// GET route
app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

//POST route
app.post("/", function(req, res) {
    const ishealt = req.body.ishealt === true; // Ensure boolean
    users[0].kidneys.push({ healthy: ishealt });
    res.json({ msg: "Done!" });
});
app.put("/", function(req, res) {
    for (let i = 0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})


// function isTheiratLeastOneUnhealthyKideny() {
//     let atLeastOneUnhealthyKideny = false;
//     for (let i = 0; i < users[0].kidneys.length; i++) {
//     if (!users[0].kidneys[i].healthy) {
//     atLeastOneUnhealthyKideny = true;
//     }
//     }
//     return atLeastOneUnhealthyKideny;
//     }
    
//     app.delete("/", (req, res) => {
//     if (isTheiratLeastOneUnhealthyKideny()) {
//     const kidneys = users[0].kidneys;
//     const healthyKideneys = [];
    
//     kidneys.filter(removeUnhealthy);
    
//     function removeUnhealthy(kidney) {
//       if (kidney.healthy === true) {
//         healthyKideneys.push(kidney);
//       }
//     }
//     users[0].kidneys = healthyKideneys;
    
//     res.json({ msg: "unhealthy Kidenyes Removed !" });
//     } else {
//     res.status(411).json({ msg: "unhealthy Kidenyes Removed !" });
//     }
//     });
    
   
// // Start server
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

//PUT - user can replace a kidney , make it healthy
app.put("/", function (req, res) {
    //if there is no unhealthy kidney
    if (isThereAtLeastOneUnhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
    }
    res.json({}); //tell the user that everything is done , if not the request will remain hung
    } else {
    res.status(411).json({
    msg: "all kidneys are already healthy",
    });
    }
    });
    
    //DELETE - User can remove a kidney
    app.delete("/", function (req, res) {
    if (isThereAtLeastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
    newKidneys.push({
    healthy: true,
    });
    }
    }
    users[0].kidneys = newKidneys;
    res.json({
    msg: "done",
    });
    } else {
    res.status(411).json({
    msg: "you have no unhealthy kidney",
    });
    }
    });
    
    function isThereAtLeastOneUnhealthyKidney() {
    //you should return a 411
    //only if at least one unhealthy kidney is there do this , else return 411
    let atLeastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
    atLeastOneUnhealthyKidney = true;
    }
    }
    return atLeastOneUnhealthyKidney;
    }
    app.listen(3000);