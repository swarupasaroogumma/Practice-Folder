const express=require("express");
const jwt=require("jsonwebtoken");
const JWT_SECRET="ghshskikkdddjdjdjdj";


const app=express();
app.use(express.json())


const users = [];
app.post("/signup",function(req,res){

   const username=req.body.username;
   const password=req.body.password;
   users.push({
    username:username,
    password:password
   })
  res.send('succesfully signedup')

})

app.post("/sigin",function(req,res){
    const username=req.body.username;
   const password=req.body.password;
   const userfound=users.find((u) => u.username === username && u.password ===password)
   if(userfound){
    const token=jwt.sign({username:userfound.username},JWT_SECRET);
    userfound.token=token
    res.send(token);

   }else{
    res.sendStatus(403).send("inavlid username or password")
   }

})
function auth(req, res, next) {
    const authHeader = req.headers.authorization; 

    try {
        const verifiedToken = jwt.verify(authHeader, JWT_SECRET);
        if (verifiedToken.username) {
            //it adds a new property to the middlewear and it able to send the data to the next middle wear
            req.username = verifiedToken.username;
            next(); // Pass control to the next middleware/route handler
        } else {
            res.status(403).send("Invalid token");
        }
    } catch (error) {
        console.error("Token verification error:", error.message);
        res.status(403).send("Invalid or expired token");
    }
}

app.get("/myinfo", auth, function (req, res) {
    const user = users.find((user) => user.username === req.username);

    if(user){
        res.send({
            username: user.username,
        });
    }else{
        res.status(401).send({
            message: "Unauthorized",
        });
    }
});
    
app.listen(3002);