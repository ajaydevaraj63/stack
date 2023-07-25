
const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true,


    },
    Email: {
        type: String,
        required: true,
        unique: true

    },
    UserNameSearch: {
        type: String,
        required: true,
        unique: true
    },
    DOB: {
        type: Date,
        required: true
    },
    Type: {
        type: Number,
        default: 0
    },
    
    Designation: {
        default:"student",
        type: String,
        require: true

    }
  
   , 
    Password: {
        default: "12345678",
        type: String
    },
  

    Otp: {
        default: 0,
        type: String
    }

}, { timestamps: true })
module.exports = mongoose.model("userstable", UserSchema);