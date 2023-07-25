const express=require('express');
const app = express();
const {CrudDelete,CrudSearch,CrudUpdate,CrudInsert} = require("../controller/Crud.Controller");
const router=express.Router();

const bdyp = require('body-parser');
const bodyParser = require('body-parser');
app.use(bdyp.json());
app.use(bodyParser.urlencoded({extended: false}));
router.post("/",CrudInsert);
router.put("/",CrudUpdate);
router.delete("/",CrudDelete);
router.get("/",CrudSearch);
module.exports=router;