const express=require("express");
const scholarshiproute=express.Router()
const path=require("path")
scholarshiproute.get("/scholarship",(req,res)=>{
    res.sendFile(path.join(__dirname,"../scholarship.html"));
})
module.exports=scholarshiproute