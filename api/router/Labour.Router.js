const express=require('express');
const router=express.Router();
const {addLabour,searchLabour,deleteLabour,updateLabour, getSAllLabour}=require ("../controller/Labour.Controller")

router.post("/",addLabour)
router.put("/",updateLabour)
router.get("/",searchLabour)
router.delete("/",deleteLabour)
router.get("/getAllLabour",getSAllLabour)
module.exports=router
