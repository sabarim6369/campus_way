const express = require("express");
const dashboardRouter = express.Router();

dashboardRouter.get("/dashboard", (req, res) => {
    try {
        res.render("dashboard", { dashboard: true });
    } catch (error) {
        console.error("Error rendering dashboard:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = dashboardRouter;
