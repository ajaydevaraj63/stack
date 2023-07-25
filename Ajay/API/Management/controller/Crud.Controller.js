
const exp = require("express");
const app = exp();
const User = require("../models/User.Model");
const mongoose = require('mongoose')
const bdyp = require('body-parser')
const bodyParser = require('body-parser');
const UserModel = require("../models/User.Model");
app.use(bdyp.json())

app.use(bodyParser.urlencoded({ extended: false }))

exports.CrudSearch = (async (req, res) => {
    try {

        
        res.status(200).send("you are inside the crud controller search")


    }
    catch (e) {
        logger.error(`${e.status || 500} - 'error' - ${e.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(401).send(e);
    }
})
exports.CrudInsert = (async (req, res) => {
    
        const user=await User(req.body)
        console.log(req.body);
         
        user.save().then((data)=>{
           res.status(200).send("successfully saved  user data")

        }).catch((error)=>{
           res.status(401).send(error);
        })

  
})

exports.CrudUpdate = (async (req, res) => {
    try {
       
        res.status(200).send("you are inside the crud controller update")


    }
    catch (e) {
        res.status(401).send(e);
    }
})

exports.CrudDelete = (async (req, res) => {
    try {
       UserModel.find().then((resp)=>{
        res.status(200).send(resp)

       }).catch((e)=>{
        res.status(401).send(e);


       })


    }
    catch (e) {
        logger.error(`${e.status || 500} - 'error' - ${e.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(401).send(e);
    }
})



