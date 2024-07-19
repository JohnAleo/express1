const express= require("express");
const router= express.Router();  

router.get("/", (req, res )=>{
    console.log("MidleWare...");
    res.send('<h1>Motor</h1>'
    );
});
module.exports=router;