const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const MenuItem = require("../models/menuItem");

// Place a new order
router.post("/", async (req, res) => {
  try {
    const { menuItems } = req.body; // Assuming menuItems is an array of menu item IDs
    const order = await Order.create({
      /* other order properties */
    });

    // Associate the selected menu items with the order
    await order.addMenuItems(menuItems);

    res.json(order);
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Failed to place order" });
  }
});

// Add more routes for retrieving order history, updating orders, etc.

module.exports = router;
