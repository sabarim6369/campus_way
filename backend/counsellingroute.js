const express = require("express");
const counsellingroute = express.Router();
counsellingroute.get("/counselling",(req,res)=>{
    res.render("counselling",{counselling:true})
})
counsellingroute.post("/counselling",(req,res)=>{
    const{physicsMarks}=req.body;
    console.log(physicsMarks)
    res.render("counselling",{counselling:true})
})

module.exports=counsellingroute;