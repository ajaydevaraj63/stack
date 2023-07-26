
const exp = require("express");
const app = exp();

const mongoose = require('mongoose')
const bdyp = require('body-parser')
const bodyParser = require('body-parser');
const Labourmodel = require("../model/Labour.Model");
app.use(bdyp.json())

app.use(bodyParser.urlencoded({ extended: false }))
exports.addLabour = ((req, res) => {
    console.log(req.body)
  
    const labour = Labourmodel(req.body)
    labour.save().then((response) => {
        console.log(response)
        res.send("data saved succcessfully")
    }).catch((error) => {
        res.send(error)
    })


    

})
exports.deleteLabour = ((req, res) => {
    console.log("inside the deleteLabour");
    res.send("inside the deleteLabour")
})
exports.updateLabour = ((req, res) => {
 
    Labourmodel.findOneAndUpdate( {  "LabourName": "jothy" }, { $set: { Email: "ajay@gmail.com" } }).then((userdata)=>{
        res.send(userdata)
    }).catch((error)=>{
        res.send(error)
    }) 
})
exports.searchLabour = ((req, res) => {
    console.log("inside the searchLabour");
    res.send("inside the searchLabour")
})
exports.getSAllLabour=((req,res)=>{
    Labourmodel.find().then((labourdata)=>{
        res.send(labourdata)

    }).catch((error)=>{
        res.send(error)
    })
    

})