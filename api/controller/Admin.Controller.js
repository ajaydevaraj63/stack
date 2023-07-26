const mongoose = require("mongoose");
const bodyParser=require("body-parser");
const bdypsr= require("body-parser");
const express= require("express");
const app=express();
const AdminModel=require("../model/Admin.Model")
app.use(bdypsr.json())
app.use(bodyParser,bodyParser.urlencoded({extended:false}))

exports.addadmin=((req,res)=>{
    console.log(req.body)
    const admin =AdminModel(req.body)
    admin.save().then((response)=>{
        res.send("saved data")

    }).catch((error)=>{
        res.send(error)
    })
    
}
)

exports.deleteAdmin = ((req, res) => {
    console.log("inside the deleteUser");
    res.send("inside the deleteUser")
})
exports.updateAdmin = ((req, res) => {
    console.log("inside the updateuser");
    res.send("inside the updateser")
})
exports.searchAdmin = ((req, res) => {
    console.log("inside the searchuser");
    res.send("inside the searchuser")
})
exports.getAllAdmin=((req,res)=>{
    AdminModel.find().then((admindata)=>{
        res.send(admindata)
    }).catch((error)=>{
        res.send(error)
    })
    
})