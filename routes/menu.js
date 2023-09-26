const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menuItem");

// Create a new menu item
router.post("/", async (req, res) => {
  try {
    const newMenuItem = await MenuItem.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    });
    res.json(newMenuItem);
  } catch (error) {
    console.error("Error creating menu item:", error);
    res.status(500).json({ error: "Failed to create menu item" });
  }
});

// Retrieve a list of menu items
router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.findAll();
    res.json(menuItems);
  } catch (error) {
    console.error("Error retrieving menu items:", error);
    res.status(500).json({ error: "Failed to retrieve menu items" });
  }
});

module.exports = router;
