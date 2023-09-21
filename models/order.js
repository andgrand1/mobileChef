const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const Order = sequelize.define('Order', {
  // Define any properties specific to the order, such as order total, delivery address, etc.
});

// Define the association between orders and menu items (many-to-many)
const MenuItem = require('./menuItem');
Order.belongsToMany(MenuItem, { through: 'OrderMenuItems' });
MenuItem.belongsToMany(Order, { through: 'OrderMenuItems' });

module.exports = Order;
