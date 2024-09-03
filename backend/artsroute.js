const express=require("express");
const arts_route=express.Router();
const path=require("path");
arts_route.get("/artscolleges",(req,res)=>{
    res.sendFile(path.join(__dirname,"../artscollege2.html"));
})
module.exports=arts_route;