const express = require("express");
const changepasswordroute = express.Router();
const path = require("path");
const connection1 = require("../database/sih_database");
const bcrypt = require("bcrypt");

// Serve the change password HTML page
changepasswordroute.get("/changepassword/:email", (req, res) => {
    const { email } = req.params;  // This should be an object destructuring assignment
    console.log(email);
    res.render("changepassword",{changepassword:true,email:email}); // Ensure this is a string path
});

changepasswordroute.post("/dashboard", (req, res) => {
    const { email, currentPassword, newPassword, confirmPassword } = req.body;

    if (newPassword !== confirmPassword) {
        return res.status(400).send("New passwords do not match.");
    }

    const query = "SELECT password, username FROM signupdetails WHERE email = ?";
    
    connection1.query(query, [email], async (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Server error.");
        }

        if (results.length === 0) {
            return res.status(404).send("User not found.");
        }

        const hashedPassword = results[0].password;
        const username = results[0].username;

        const match = await bcrypt.compare(currentPassword, hashedPassword);

        if (!match) {
            return res.status(401).send("Current password is incorrect.");
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        const updateQuery = "UPDATE signupdetails SET password = ? WHERE email = ?";
        connection1.query(updateQuery, [hashedNewPassword, email], (updateErr) => {
            if (updateErr) {
                console.error(updateErr);
                return res.status(500).send("Failed to update password.");
            }

            res.render("dashboard", {
                dashboard: true,
                name: username,
                email: email,
                msg: "Password changed successfully"
            });
        });
    });
});

module.exports = changepasswordroute;
