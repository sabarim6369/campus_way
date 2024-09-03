const express = require("express");
const bcrypt = require("bcrypt"); 
const signuproute = express.Router();
const connection1 = require("../database/sih_database");

signuproute.get("/signup", (req, res) => {
  res.render("signup", { signuppage: true });
});

signuproute.post("/signup", async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;
  
  // Check if passwords match
  if (password != confirmpassword) {
    return res.render("signup", {
      signuppage: true,
      error: "Passwords do not match."
    });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into the database
    const query = 'INSERT INTO signupdetails(email, password, username) VALUES (?, ?, ?)';
    connection1.query(query, [email, hashedPassword, name], (err, results) => {
      if (err) {
        // Check for duplicate entry error
        if (err.code === 'ER_DUP_ENTRY') {
          return res.render("signup", {
            signuppage: true,
            error: "The email address is already registered. Please use a different email."
          });
        } else {
          console.log(err); // Log other errors for debugging
          return res.render("signup", {
            signuppage: true,
            error: "An error occurred while signing up. Please try again."
          });
        }
      } else {
        console.log("Details stored successfully");
        res.render("login", { loginpage: true });
      }
    });
  } catch (err) {
    console.log(err);
    res.render("signup", {
      signuppage: true,
      error: "An error occurred while hashing the password. Please try again."
    });
  }
});

module.exports = signuproute;
