const { Order, User } = require("../models");

const sampleOrder = [
  {
    orderNumber: "1",
    orderTotal: "$40.52",
    orderStatus: "complete",
    deliveryAddress: "123 Main St",
    userId: "1",
  },
  {
    orderNumber: "2",
    orderTotal: "$12.99",
    orderStatus: "active",
    deliveryAddress: "456 Maple Rd",
    userId: "2",
  },
  {
    orderNumber: "3",
    orderTotal: "$97.13",
    orderStatus: "pending payment",
    deliveryAddress: "789 Hennepin Hill",
    userId: "3",
  },
];

const userData = [
  {
    name: "Molly Lolly",
  },
  {
    name: "Tilly Willy",
  },
  {
    name: "Nelly Belly",
  },
];

async function seed() {
  try {
    await User.bulkCreate(userData);
    await Order.bulkCreate(sampleOrder);
  } catch (error) {
    console.error("Error seeding sample order:", error);
  }
}

seed();
