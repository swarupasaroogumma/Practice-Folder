const  { Router } = require("express")
const userRouter=Router();
const {z} = require("zod")
const bcrypt = require("bcrypt")
const { userModel } = require("../db")

// userRouter.post("/signup", async function(req,res){
//     const reqbody=object({
//         email:z.string().min(5).max(50).email(),
//         password: z
//         .string()
//         .min(5, { message: "Password must be at least 5 characters long" })
//         .max(100, { message: "Password must be at most 100 characters long" })
//         .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
//         .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" }),
//         firstname:z.string().min(5).max(50),
//         lastname:z.string().min(5).max(50)

//     })

//     const dataparse=reqbody.safeParse(req.body);
//     if(!dataparse.success){
//         res.json({
//             msg:"invalid format",
//             error: dataparse.error

//         })
//         return
  
//     }
   
//     const {email, password, firstname, lastname} =dataparse.data;
//     await userModel.create({
//         email,
//         password,
//         firstname,
//         lastname
//     })

//     res.json({
//         msg:"succesfully signup"
//     })

// })


userRouter.post("/signup", async function (req, res) {
    // Define the validation schema
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
    const { email, password, firstname, lastname } = dataparse.data;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save the user in the database
        await userModel.create({
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
});


userRouter.post("/signin",function(req,res){
    
})
userRouter.get("/purchase",function(req,res){
    
})

module.exports={
    userRouter: userRouter

}