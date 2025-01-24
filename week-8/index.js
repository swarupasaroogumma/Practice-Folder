const express=require("express");
const { userRouter } =require("./routes/user");
const { courseRouter } =require("./routes/course");
const { adminRouter } =require("./routes/admin");

 const mongoose=require("mongoose")

const app=express();
app.use(express.json())

app.use('/api/v1/user',userRouter);
app.use('/api/v1/course',courseRouter);
app.use('/api/v1/admin',adminRouter)

async function main(){

await mongoose.connect("mongodb+srv://gummaswarupa:hzDa1PP7A9o0vzw1@cluster1.lslwi.mongodb.net/");
app.listen(3000);
}
main()

