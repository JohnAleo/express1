const express= require("express");
const router= express.Router();  
const path= require("path")

router.get("/add-new-motor", (req, res, next)=> {
    res.sendFile(path.join(__dirname,"..", "view", "add-new-motor.html"));  

});

module.exports=router;