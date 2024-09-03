const express=require("express");
const entranceroute=express.Router()
const path=require("path")
entranceroute.get("/entrance",(req,res)=>{
    res.sendFile(path.join(__dirname,"../entrance.html"));
})
module.exports=entranceroute