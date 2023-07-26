const express=require('express');
const router=express.Router();
const {addUser,deleteUser,updateUser,searchUser,getAllUser}=require ("../controller/User.Controller")

router.post("/",addUser)
router.put("/",updateUser)
router.get("/",searchUser)
router.delete("/",deleteUser)
router.get("/getAllUser",getAllUser)

module.exports=router