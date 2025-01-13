// const express=require("express");
// //if u r set request from fe to be we have cors , it  is blocked thats why install 
// const cors=require("cors");


// const app=express();
// app.use(express.json());
// app.use(cors())
//  app.get("/sum",function(req,res){
//     const a=parseInt(req.body.a);
//     const b=parseInt(req.body.a);
//     res.json({
//         add:a + b

//     })
//  })


// app.listen(3000);
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/sum", function (req, res) {
    const a = parseInt(req.body.a); // Access JSON body
    const b = parseInt(req.body.b);
    
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }

    res.json({
        add: a + b
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
