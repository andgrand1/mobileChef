const router = require("express").Router();

const orderjs = require("./orders");
const menujs = require("./menu");
router.use("/order", orderjs);
router.use("/menu", menujs);

module.exports = router;
