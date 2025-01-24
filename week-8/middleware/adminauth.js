// const { JWT_aSECRET } = require("../config")
const jwt =require("jsonwebtoken")

function adminmidd( req,res,next){
    const token=req.headers.authorization;
        const verifyc=jwt.verify(token,process.env.JWT_aSECRET);
        if(verifyc){
            req.userId=verifyc.id
            next()
        }else{
            res.sendStatus(403).send("hey dude token invalid")
        }
    
}
module.exports={
    adminmidd
}