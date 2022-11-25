var express = require("express");
const router = express.Router();

var {class1} = require('../controller/controller');

var path = require("path");

var Todo = require("../models/schema")

var { upload } = require('../middleware/middleware');

router.get("/upload",class1.a);
router.post("/upload",upload.single('addprofilepicture'),class1.b);
router.get("/show",class1.e);
router.get("/find",class1.c);
router.get("/delete",class1.d);

router.get("/*",(req,res)=>{

    res.sendFile(path.join(__dirname, "../index.html"));
    
})

module.exports = router;