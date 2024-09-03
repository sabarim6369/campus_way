const express=require("express");
const roadmaproute=express.Router();
const path=require("path");
roadmaproute.get("/roadmap",(req,res)=>{
    res.sendFile(path.join(__dirname,"../roadmap.html"));
})
module.exports=roadmaproute