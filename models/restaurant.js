const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');
const { Model, DataTypes } = require("sequelize");

// const Restaurant = sequelize.define('Restaurant', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: Sequelize.TEXT,
//   },
//   location: {
//     type: Sequelize.STRING,
//   },
//   // Add more properties as needed, such as opening hours, contact information, etc? 
// });

const MenuItem = require('./menuItem');
Restaurant.hasMany(MenuItem);

Restaurant.init(
  {
    restaurant_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    restaurant_description: {
      type: DataTypes.TEXT,
    },
    restaurant_location: {
      type: DataTypes.STRING,
    },
    restaurant_hours: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "restaurant",
  }
);

module.exports = Restaurant;
