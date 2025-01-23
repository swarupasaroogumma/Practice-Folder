const { Router } =require("express");

const adminRouter=Router();
const { adminModel }=require("../db")
const jwt=require("jsonwebtoken");
const JWT_SECRET="icandoallythethingsthroughchrist"
const {z} = require("zod")
const bcrypt = require("bcrypt")

adminRouter.post("/signup",async function(req,res){
    const reqbody = z.object({
        email: z.string().min(5).max(50).email(),
        password: z
            .string()
            .min(5, { message: "Password must be at least 5 characters long" })
            .max(100, { message: "Password must be at most 100 characters long" })
            .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
            .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" }),
        firstname: z.string().min(5).max(50),
        lastname: z.string().min(5).max(50),
    });

    // Validate the request body
    const dataparse = reqbody.safeParse(req.body);

    if (!dataparse.success) {
        res.json({
            msg: "Invalid input format",
            error: dataparse.error.errors, // Provide detailed error messages
        });
        return;
    }

    // Use validated data
    const { email, password, firstname, lastname } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save the user in the database
        await adminModel.create({
            email,
            password: hashedPassword,
            firstname,
            lastname,
        });

        res.json({
            msg: "Successfully signed up",
        });
    } catch (e) {
        res.json({
            msg: "Error saving user",
            error: e.message,
        });
    }

})


adminRouter.post("/signin",async function(req,res){
    const reqbody = z.object({
        email: z.string().min(5).max(50).email(),
        password: z
            .string()
            .min(5, { message: "Password must be at least 5 characters long" })
            .max(100, { message: "Password must be at most 100 characters long" })
            .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
            .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    })
    const datavalid= reqbody.safeParse(req.body)
    if (!datavalid.success) {
        res.json({
            msg: "Invalid input format",
            error: dataparse.error.errors, // Provide detailed error messages
        });
        return;
    }

    const { email, password} = req.body;
    const checkingmail= await adminModel.findOne({
        email
    })
    if(!checkingmail){
        res.send({
            msg:"not a valid user"
        })
        return
    }
    
        const hashedPassword= await  bcrypt.compare(password,checkingmail.password)
        if(hashedPassword){
            const token= jwt.sign({id:checkingmail._id.toString()},JWT_SECRET);
            res.send({token})

        }
       else{
        res.json({
            msg: "Error invalid credintals",
           
        });

    }
    

})
    


adminRouter.post("/course",function(req,res){
    
})

adminRouter.put("/course",function(req,res){
    
})


adminRouter.get("/course/bulk",function(req,res){
    
})
adminRouter.delete("/course",function(req,res){
    
})



module.exports={
    adminRouter
}