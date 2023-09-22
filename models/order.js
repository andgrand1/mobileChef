const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const User = require('./User'); 
const MenuItem = require('./menuItem')

const Order = sequelize.define(
  'Order',
  {
    orderNumber: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    orderTotal: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    orderStatus: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'pending',
    },
    deliveryAddress: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
  },
  {
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
  }
);

// Associations
Order.belongsTo(User, { foreignKey: 'userId' });
Order.belongsToMany(MenuItem, { through: 'OrderMenuItems' });
MenuItem.belongsToMany(Order, { through: 'OrderMenuItems' });



Order.belongsTo(User, { foreignKey: 'userId' }); 

Order.prototype.calculateOrderTotal = async function () {
    try {
      const menuItems = await this.getMenuItems();
  
      // Calculate the total order cost by summing up the prices of menu items
      let total = 0;
      for (const menuItem of menuItems) {
        total += menuItem.price; 
      }
      
      // Update the 'orderTotal' property of this order
      this.orderTotal = total;
      
      // Save the updated order
      await this.save();
  
      return total; // Return the total order cost
    } catch (error) {
      console.error('Error calculating order total:', error);
      throw error;
    }
  };
  

Order.prototype.updateOrderStatus = async function (newStatus) {
  
  this.orderStatus = newStatus;
  await this.save();
};

module.exports = Order;

