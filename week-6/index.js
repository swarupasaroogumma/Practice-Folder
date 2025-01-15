const express= require("express")
 const jwt=require("jsonwebtoken")
const JWT_SECRET="ilovejesus";
const app=express()
app.use(express.json());
 const users=[];

//  function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }
app.post("/signup",function(req, res){
    const username=req.body.username;
    const password =req.body.password;
    users.push({
        username:username,
        password:password
    })
    res.json({
        msg:"you successfully signup"
    })

})



app.post("/sign",function(req, res){
    const username=req.body.username;
    const password =req.body.password;

    //find seraches each array object  {username:122, pass:1234}
    //if it is find it modies the array by add a token to it

    const verificat=users.find(user => user.username === username && user.password === password)
        if(verificat){
            const token = jwt.sign({ username:verificat.username},JWT_SECRET); // Example token
            verificat.token = token; // Update the user object with the toke
            res.send({
                token
            })
            console.log(users)

        }else{
            res.status(403).send("invalid credintials")
        }

})

app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const userDetails = jwt.verify(token, JWT_SECRET);

    const username =  userDetails.username;
    const user = users.find(user => user.username === username);

    if (user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})



app.listen(3001);
