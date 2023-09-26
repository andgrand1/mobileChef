const router = require("express").Router();
const apiRoutes = require("./api");
const Routes = require("../routes");
router.use("/api", apiRoutes);
router.use("/routes", Routes);

module.exports = router;
