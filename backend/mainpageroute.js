const express = require("express");
const mainroute=express.Router();
mainroute.get("/",(req,res)=>{
    res.render("mainpage",{main:true})
})
mainroute.post("/home",(req,res)=>{
    
    res.render("home",{homepage:true})
})
module.exports=mainroute;