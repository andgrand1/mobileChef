const MenuItem = require("../models");
const Restaurant = require("../models");

const menuData = [
  {
    name: "Big Mac",
    description: "The iconic Big Mac burger.",
    price: 6.29,
    categoryId: 1, // Category ID for Burgers
    restaurantId: 1, // Restaurant ID for McDonald's
  },
  {
    name: "Quarter Pounder with Cheese",
    description: "A classic quarter pounder with cheese.",
    price: 6.29,
    categoryId: 1, // Category ID for Burgers
    restaurantId: 1,
  },
  {
    name: "Chicken McNuggets (6 pieces)",
    description: "Crispy chicken McNuggets.",
    price: 4.39,
    categoryId: 2, // Category ID for Chicken
    restaurantId: 1,
  },
  {
    name: "Filet-O-Fish",
    description: "A delicious fish sandwich.",
    price: 5.19,
    categoryId: 3, // Category ID for Fish
    restaurantId: 1,
  },
  {
    name: "McChicken",
    description: "A tasty chicken sandwich.",
    price: 3.29,
    categoryId: 2, // Category ID for Chicken
    restaurantId: 1,
  },
  {
    name: "Cheeseburger",
    description: "A classic cheeseburger.",
    price: 2.99,
    categoryId: 1, // Category ID for Burgers
    restaurantId: 1,
  },
  {
    name: "Fries (Small)",
    description: "Golden, crispy French fries.",
    price: 3.99,
    categoryId: 4, // Category ID for Sides
    restaurantId: 1,
  },
  {
    name: "Apple Pie",
    description: "A warm apple pie dessert.",
    price: 2.19,
    categoryId: 5, // Category ID for Desserts
    restaurantId: 1,
  },
  // Add more menu items as needed...
];

const categoryData = [
  {
    name: "Burgers",
  },
  {
    name: "Chicken",
  },
  {
    name: "Fish",
  },
  {
    name: "Sides",
  },
  {
    name: "Desserts",
  },
  // Add more categories as needed...
];

const restaurantData = [
  {
    name: "McDonald's",
    description: "World-famous fast-food restaurant.",
  },
  // Add more restaurants as needed...
];

async function seed() {
  try {
    await Category.bulkCreate(categoryData);
    await Restaurant.bulkCreate(restaurantData);
    await MenuItem.bulkCreate(menuData);
  } catch (error) {
    console.error("Error seeding McDonald's menu:", error);
  }
}

// Call the seed function to populate the database
seed();
