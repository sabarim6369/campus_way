const express = require('express');
const homerouter = express.Router();


homerouter.get("/home", (req, res) => {
    const message = req.query.message
    res.render("home", { homepage: true,message: message});
});

homerouter.get("/thankyou", (req, res) => {
    res.render("thankyou", { message: "Thank you for your feedback!" });
});
module.exports = homerouter;
