const mongoose = require("mongoose")

const AdminSchema= new mongoose.Schema({

    UserName:{
        type:String ,
        required: true ,
        unique: true
        
    }
    ,
    Password:{
        type:String ,
        required: true ,
        
        
    },
    
    Email:{
        type:String ,
        required: true ,
        unique: true
        
    }
})
module.exports=mongoose.model("adminschema",AdminSchema)