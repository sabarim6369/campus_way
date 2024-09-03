const express=require("express");
const app=express();
const path=require("path");
const dotenv=require("dotenv").config();
const exphbs=require("express-handlebars")
const mysql=require("mysql")
app.use(express.static(path.join(__dirname,"./frontend/public")))

const handlebars = exphbs.create({ extname: ".hbs" });
app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");
const session = require('express-session');
app.set("views", path.join(__dirname, "./frontend/views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// const loginroute=require("./backend/routes/loginrouter")
const mainRoutes = require('./mainroutes'); 
app.use(
    session({
      secret: process.env.SESSION_SECRET || "your-secret-key",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
  );    
// app.get("/",(req,res)=>{
//     res.render("login",{loginpage:true})
// })
// app.get("/",(req,res)=>{
//   res.render("home",{homepage:true})
// })

app.use('/', mainRoutes);

app.listen(process.env.port,()=>{
    console.log(`connection successfull in port ${process.env.port}`)
})
