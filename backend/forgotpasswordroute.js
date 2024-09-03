const express=require("express");
const forgotpassword = express.Router();
forgotpassword.get("/forgotpassword",(req,res)=>{
    res.send("set the frontend for this route")
})
module.exports=forgotpassword;