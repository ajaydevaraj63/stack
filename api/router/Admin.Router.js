const express = require("express");
const router= express.Router();
const {addadmin,deleteAdmin,updateAdmin,searchAdmin, getAllAdmin}=require("../controller/Admin.Controller");
router.get("/",searchAdmin)
router.post("/",addadmin)
router.put("/",updateAdmin)
router.delete("/",deleteAdmin)
router.get("/getAllAdmin",getAllAdmin)
module.exports=router
