
const express=require("express")
const jwt=require("jsonwebtoken")
const JWT_SECRET="mylovelyjesus"
const app=express();
app.use(express.json());;

const users=[]
const todos=[]
app.get("/", function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})
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
function auth(req, res, next) {
    const authHeader = req.headers.authorization;

    try {
        const verifiedToken = jwt.verify(authHeader, JWT_SECRET);
        req.username = verifiedToken.username;
        next();
    } catch (error) {
        console.error("Token verification error:", error.message);
        res.status(403).send("Invalid or expired token");
    
    }
}


app.post("/todos",auth,function(req,res){
    const addtodo=req.body.addtodo
    todos.push({ id: todos.length + 1, username: req.username, addtodo, completed: false });
    res.send({ message: 'TODO added!' });
})

app.put("/todos/:id",auth,function(req,res){
    const allow=todos.find( u => u.username === req.username && u.id === parseInt(req.params.id))
    if(allow){
        allow.completed=!allow.completed
        res.send({ message: 'TODO updda!' });

    }else {
        res.status(404).send({ message: 'TODO not found!' });
    }
    
})
app.get("/todos",auth,function(req,res){
    const userTodos = todos.filter(todo => todo.username === req.username);
    res.send({ todos: userTodos });

})

app.delete("/todos/:id", auth, function (req, res) {
    const todoIndex = todos.findIndex(
        (u) => u.username === req.username && u.id === parseInt(req.params.id)
    );

    if (todoIndex !== -1) {
        // Remove the TODO at the specified index
        todos.splice(todoIndex, 1);
        res.send({ message: "TODO deleted successfully!" });
    } else {
        res.status(404).send({ message: "TODO not found!" });
    }
});




app.listen(3000);