const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const MenuItem = sequelize.define('MenuItem', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2), // Example: 9.99
    allowNull: false,
  },
  // Add more properties as needed
});

module.exports = MenuItem;
