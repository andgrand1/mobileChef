const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");
const Routes = require("../routes");
router.use("/api", apiRoutes);
router.use("/", Routes);
router.get("/", (req, res) => {
  res.render("home", { title: "Food Delivery App" });
});

module.exports = router;
