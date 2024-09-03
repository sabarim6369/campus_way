const express=require("express");
const counsellingpartroute=express.Router();
const path=require("path")
counsellingpartroute.get("/counsellingpart",(req,res)=>{
    res.sendFile(path.join(__dirname,"../counsellingpart.html"));
})
module.exports=counsellingpartroute;