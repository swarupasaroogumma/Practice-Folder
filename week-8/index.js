const express=require("express");
const { userRouter } =require("./routes/user");
const { courseRouter } =require("./routes/course");
const { adminRouter } =require("./routes/admin");

//  const jwt=require("jsonwebtoken");
// const JWT_SECRET="icandoallythethingsthroughchrist"

 const mongoose=require("mongoose")

const app=express();
app.use(express.json())

app.use('/api/v1/user',userRouter);
app.use('/api/v1/course',courseRouter);
app.use('/api/v1/admin',adminRouter)

async function main(){

await mongoose.connect("mongodb+srv://gummaswarupa:Y7OsM2DjkYcBJoFP@cluster0.lslwi.mongodb.net/week-8")
app.listen(3000);
}
main()

