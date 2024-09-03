const express=require("express");
const collegepredictionroute=express.Router();
collegepredictionroute.get("/collegeprediction",(req,res)=>{
    res.render("collegeprediction",{collegeprediction:true})
})
collegepredictionroute.post("/dataform",(req,res)=>{
    const{sector}=req.body;
    console.log(sector)
    res.render("dataform",{dataform:true,sector:sector})
})
module.exports=collegepredictionroute