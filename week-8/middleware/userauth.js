
const jwt =require("jsonwebtoken")
// const { JWT_SECRET } = require("../config")

function usermdd( req, res, next){
    const token=req.headers.authorization;
        const verifyc=jwt.verify(token,process.env.JWT_SECRET);
        if(verifyc){
            req.userId=verifyc.id
            next()
        }else{
            res.sendStatus(403).send("hey dude token invalid")
        }
    
}
module.exports={
    usermdd
}