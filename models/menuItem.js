const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const MenuItem = sequelize.define('MenuItem', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Ensure the name is not empty
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2), // Example: 9.99
    allowNull: false,
    validate: {
      min: 0, // Ensure the price is non-negative
    },
  },
  // Add more properties as needed
});

module.exports = MenuItem;
