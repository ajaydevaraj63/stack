const mongoose = require('mongoose')


const LabourSchema = new mongoose.Schema({
    LabourName: {
        type: String,
        required: true,


    },
    Email: {
        type: String,
        required: true,
        unique: true

    },
   
    DOB: {
        
        type: Date,
        required: true
    },
    Address: {
        type: String,
        required:false
    },
    
    Designation: {
        default:"Associate Employee",
        type: String,
        required: true

    }
  
   , 
    Password: {
        default: "12345678",
        type: String,
        required: true
    },
  

    LabourId: {
        type: String,
        required: true,
        unique:true


    },
    Salary: {
        default: "18000",
        type: String, 
        required: true,

    },

}, { timestamps: true })
module.exports = mongoose.model("Labour", LabourSchema);