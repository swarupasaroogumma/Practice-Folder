const express = require("express");

const app = express();
//app.use(express.json())
//middle ware

let requestcount=0;
function reqct(req, res, next){
    requestcount=requestcount+1;
    console.log(requestcount)
    next();

}
app.use(reqct);
app.get("/sum/:a/:b", function(req, res) {
    // const a = parseInt(req.query.a);//it becomes string
    // const b =  parseInt(req.query.b);

    const a = parseInt(req.params.a);
     const b =  parseInt(req.params.b);


    res.json({
        ans: a + b
    })


});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b
    })

    
});
//instead of divide/?a=2&b=3 it gives dynamic routes  like divide/1/2 
app.get("/divide/:a/:b", function(req, res) {
    const a = parseInt(req.query.a);
    const b =  parseInt(req.query.b);

    res.json({
        ans: a / b
    })

    

});

app.get("/subtract", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a - b
    })


});

app.listen(3000);