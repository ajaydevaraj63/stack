
const exp = require("express");
const app = exp();

const mongoose = require('mongoose')
const bdyp = require('body-parser')
const bodyParser = require('body-parser');
const UserModel = require("../model/User.Model");
app.use(bdyp.json())

app.use(bodyParser.urlencoded({ extended: false }))
exports.addUser = ((req, res) => {
    console.log(req.body)
    const user = UserModel(req.body)
    user.save().then((response) => {
       
        res.send("data saved succcessfully")
    }).catch((error) => {
        res.send(error)
    })


})
exports.deleteUser = ((req, res) => {
    UserModel.deleteOne({"UserName":req.body.UserName}).then((userdata)=>{
        res.send(userdata)
    }).catch((error)=>{
        res.send(error)}
        )
    
   
})
exports.updateUser = ((req, res) => {
  
    UserModel.findOneAndUpdate( { UserName: "joth1y" }, { $set: { Email: "ajay@gmail.com" } }).then((userdata)=>{
        res.send(userdata)
    }).catch((error)=>{
        res.send(error)
    }) 
    
})
exports.searchUser = ((req, res) => {
  
    UserModel.find({"UserName":req.query.UserName}).then((userdata)=>{
        res.send(userdata)
    }).catch((error)=>{
        res.send(error)
    })
})
exports.getAllUser = ((req,res)=>{

UserModel.findByIdAndUpdate().then((userdata)=>{
    res.send(userdata)
}).catch((error)=>{
    res.send(error)

})

  
})