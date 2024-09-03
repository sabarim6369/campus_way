const express = require("express");
const feedbackrouter = express.Router();
const connection1 = require("../database/sih_database");
const nodemailer = require("nodemailer");

feedbackrouter.get("/feedback", (req, res) => {
    res.render("feedback", { feedback: true });
});

feedbackrouter.post("/feedback", (req, res) => {
    const { name, email, feedback } = req.body;
    const query = "INSERT INTO feedback (email, name, feeback) VALUES (?, ?, ?)";

    
    var sender = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sabarim6369@gmail.com",
        pass: "yikd grjl jyag nywa",
      },
    });

   
    var composemail = {
      from: "sabarim6369@gmail.com",
      to: "sabari.m2023cse@sece.ac.in",
      subject: "Mail from your website users",
      text: `${feedback} has been sent as feedback`,
    };


    sender.sendMail(composemail, (err, info) => {
      if (err) {
        console.log("Some problem occurred:", err);
      } else {
        console.log("Mail sent successfully:", info.response);
      }
    });

  
    connection1.query(query, [email, name, feedback], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error inserting feedback");
        } else {
            console.log("Feedback inserted");
         
            res.redirect("/home?message=Feedback successfully submitted!!");
        }
    });
});

module.exports = feedbackrouter;
