const mongoose =require("mongoose")
const bodyParser=require("body-parser")
const exp=require("express")
const {urlencoded}=require("body-parser")
const app= exp()
const userRouter =require("./router/User.Router")
const adminRouter =require("./router/Admin.Router")
const labourRouter= require("./router/Labour.Router")
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST, PATCH, DELETE, OPTIONS");
    next();
});
app.use(urlencoded({ extended: true }))
app.use(bodyParser.json())

const connect=()=>{
    try {
        mongoose.connect("mongodb+srv://ajaydvrj:qwertyui.1@usermanagement.rzpxfmj.mongodb.net/userdb", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    
        console.log("Connected to MongoDB");
    
        
    } catch (error) {
       console.log(error); 
    }
}
app.use("/user",userRouter)
app.use("/admin",adminRouter)
app.use("/labour",labourRouter)
app.listen(4005,()=> {
    connect();
    console.log("running")
})