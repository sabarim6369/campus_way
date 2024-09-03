const express = require("express");
const collegeRouter = express.Router();
collegeRouter.get("/colleges",(req,res)=>{
    res.render("colleges",{college:true})
})
module.exports=collegeRouter;