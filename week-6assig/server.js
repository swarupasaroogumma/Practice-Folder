const express=require("express")
const jwt=require("jsonwebtoken")
const JWT_SECRET="mylovelyjesus"
const app=express();
app.use(express.json());;

const users=[]

app.post("/signup", function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    users.push({
        username:username,
        password:password
    })
    res.send("succesfully signed in")


})


app.post("/signin", function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const verifiedcred=users.find(u =>u.username === username && u.password === password )
    if(verifiedcred){
        const token = jwt.sign({username:verifiedcred.username} ,JWT_SECRET)
        res.send({token})
    }else{
        res.sendStatus(404).send("invalid credintals")
    }

    
})



app.listen(3000);