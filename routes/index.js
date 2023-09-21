const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
router.use("/users", userRoutes);
router.get("/", (req, res) => {
  res.render("home", { title: "Food Delivery App" });
});

module.exports = router;
