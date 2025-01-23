const express=require("express")
const bcrypt=require("bcrypt")
const { Usemodel, Todomodel } =require("./db")
const jwt=require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const {z} =require("zod")

const JWT_SECRET="jesusismysaviour"
mongoose.connect("")
const app=express();
app.use(express.json())

app.post("/signup", async function (req, res) {
    const reqbody=z.object({
        email:z.string().min(3).max(100),
        password:z.string(),
        name:z.string()

    })
    //const parsedta=reqbody.parse(req.body)
    const parsedatasuccess=reqbody.safeParse(req.body)
    if(!parsedatasuccess.success){
        res.json({
            msg:"input incorrect format",
            error:parsedatasuccess.error
        })
        return
    }
    const { email, password, name } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 5);

        // Save the user in the database
        await Usemodel.create({
            email,
            password: hashedPassword,
            name
        });

        // Send success response
        res.status(201).json({
            message: "You successfully signed up."
        });

    } catch (e) {
        console.error(e); // Log the error for debugging

        // Check for duplicate key error
        if (e.code === 11000) {
            return res.status(409).json({
                msg: "User already exists."
            });
        }

        // Handle other errors
        res.status(500).json({
            msg: "An error occurred. Please try again later."
        });
    }
});

app.post("/signin",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const check= await Usemodel.findOne({
        email:email,
       

    })
    if(!check){
        res.sendStatus(403).send("user not exists")
    }

    const passwordmatch= await bcrypt.compare(password,check.password)
    if(passwordmatch){
        const token=jwt.sign({id:check._id.toString()},JWT_SECRET);
        res.json({token})
    }else{
        res.sendStatus(403).send("unauthorized prsn")
    
    }


})

function auth(req, res, next){
    const token=req.headers.authorization;
    const verifyc=jwt.verify(token,JWT_SECRET);
    if(verifyc){
        req.userId=verifyc.id
        next()
    }else{
        res.sendStatus(403).send("hey dude token invalid")
    }

}
app.post("/todos",auth, function(req,res){
    const title=req.body.title
    const userId=req.userId
    Todomodel.create({
        title,
        userId

    })
    res.json({
        userId:userId
    })

})
app.get("/todos",async function(req,res){
    const userId=req.userId
    const todos=await Todomodel.find({
        userId:userId

    })

    res.json({
        todos
    })
    
})

app.listen(3000);