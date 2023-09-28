const router = require("express").Router();
const apiRoutes = require("./api");
const Routes = require("../routes");
router.use("/api", apiRoutes);
router.use("/routes", Routes);
router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.render("find");
  } else {
    res.render("login");
  }
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/cart", (req, res) => {
  res.render("cart");
});

module.exports = router;
