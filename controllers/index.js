const router = require("express").Router();
const apiRoutes = require("./api");
const Routes = require("../routes");
router.use("/api", apiRoutes);
router.use("/routes", Routes);
router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.render("mcdonald");
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
router.get("/mcdonalds", (req, res) => {
  res.render("mcdonald");
});

module.exports = router;
