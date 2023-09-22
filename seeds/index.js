const seedMenuItem = require("./menuItem-seeds");
const seedOrder = require("./order-seeds");
const seedRestaurant = require("./restaurant-seeds");
const seedUser = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");

    await seedMenuItem();
    console.log("\n----- MENU ITEMS SEEDED -----\n");

    await seedOrder();
    console.log("\n----- ORDERS SEEDED -----\n");

    await seedRestaurant();
    console.log("\n----- RESTAURANTS SEEDED -----\n");

    await seedUser();
    console.log("\n----- USERS SEEDED -----\n");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
};

seedAll();
