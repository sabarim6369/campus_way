const express=require("express");
const lawroute=express.Router();
const path=require("path");
lawroute.get("/lawcollege",(req,res)=>{
    res.sendFile(path.join(__dirname,"../lawcollege.html"));
})
module.exports=lawroute;