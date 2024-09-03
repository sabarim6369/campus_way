const express = require('express');
const bcrypt = require('bcrypt');
const loginrouter = express.Router();
const connection1 = require("../database/sih_database");

loginrouter.get('/login', (req, res) => {
  res.render("login", { loginpage: true });
});

loginrouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

 
  const query = 'SELECT email, password FROM signupdetails WHERE email = ?';

  connection1.query(query, [email], async (err, results) => {
    if (err) {
 
      console.error("Database query error:", err.message);
      return res.render("login", {
        loginpage: true,
        error: "An error occurred. Please try again later."
      });
    }

    if (results.length === 0) {
   
      return res.render("login", {
        loginpage: true,
        error: "No account found with the given email. Please sign up."
      });
    }

    const user = results[0]; 

    try {
      
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        
        return res.render("login", {
          loginpage: true,
          error: "Invalid email or password."
        });
      } else {
        const query="select username,email from signupdetails where email=?";
        connection1.query(query,[email],(err,results)=>{
          if(err){
            console.log(err);
          }
          else{
            const user=results[0];
            const name=user.username;
            const email=user.email;
            console.log(email);
            res.render("dashboard", { dashboard: true,name:name,email});
          }
        })
       
      }
    } catch (compareError) {
      console.error("Error comparing passwords:", compareError.message);
      res.render("login", {
        loginpage: true,
        error: "Server error. Please try again later."
      });
    }
  });
});

module.exports = loginrouter;
