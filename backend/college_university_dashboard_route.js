const express = require("express");
const path = require("path"); 
const college_university_route = express.Router();
college_university_route.get("/collegeoruniversity",(req,res)=>{
    res.sendFile(path.join(__dirname,"../college.html"));
})
college_university_route.get("/animationcollege",(req,res)=>{
    res.sendFile(path.join(__dirname,"../animation.html"));})
module.exports=college_university_route;
