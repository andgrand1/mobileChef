const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const Restaurant = sequelize.define('Restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  location: {
    type: Sequelize.STRING,
  },
  // Add more properties as needed, such as opening hours, contact information, etc? 
});

const MenuItem = require('./menuItem');
Restaurant.hasMany(MenuItem);


module.exports = Restaurant;
