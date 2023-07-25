
const mongoose = require('mongoose')
const bdyp = require('body-parser')
const { urlencoded } = require('body-parser')
const exp = require('express')
const app = exp()
const crudRoute = require('./router/Crud.Routes');
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST, PATCH, DELETE, OPTIONS");
    next();
});
app.use(urlencoded({ extended: true }))
app.use(bdyp.json())
app.use("/usercrud", crudRoute);

const connect = async () => {
    //     //`mongodb://${Username}:${Password}@${Host}:${Port}/${Dbname}`
       
    // mongodb+srv://ajaykumar:ajay.qwertyui@clustercommittee.c53gsx4.mongodb.net/recreation_committee

    try {
        await mongoose.connect("mongodb+srv://ajaydvrj:qwertyui.1@usermanagement.rzpxfmj.mongodb.net/userdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("Connected to MongoDB");

    }
    catch (error) {
        console.log("Failed to connect to MongoDB: ", error);
    }

}
app.listen(4005, async() => {
    
  await connect();

    console.log("running")
})


