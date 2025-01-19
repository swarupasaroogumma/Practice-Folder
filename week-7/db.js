const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const User=new Schema({
    name:String,
    email:String,
    password:password
})

const Todo=new Schema({
    done:Boolean,
   userId:ObjectId
})

// User schema put data inthe user collction
const Usemodel=mongoose.model("user",User)
const Todomodel=mongoose.model("todo",Todo)
module.exports={
    Usemodel:Usemodel,
    Todomodel:Todomodel
}