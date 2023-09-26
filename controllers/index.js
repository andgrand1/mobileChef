const router = require("express").Router();
const apiRoutes = require("./api");
const Routes = require("../routes");
router.use("/api", apiRoutes);
router.use("/routes", Routes);
router.get("/", (req, res) => {
  res.render("home", { title: "Food Delivery App" });
});

module.exports = router;
