const { restaurant } = require("../models");

const restaurantInfo = [
  {
    restaurant_name: "McDonalds",
    restaurant_description:
      "Offering American-style hamburgers, cheeseburgers, chicken burgers, chicken nuggets, fries, ice cream, and more since 1940.",
    restaurant_location: "1100 University Ave NE, Minneapolis, MN 55413",
    restaurant_hours: "6:00 AM - 11:00 PM",
  },
  // committed out until we have more time to add the necessary menu items for the corresponding restaurants
//   {
//     restaurant_name: 'Wendys',
//     restaurant_description: 'Your go-to for burgers, salads, french fries, ice cream, and more since 1969!',
//     restaurant_location: '421 W Broadway, Minneapolis, MN 55411',
//     restaurant_hours: '6:30 AM - 1:00 AM',
//   },
//   {
//     restaurant_name: 'Burger King',
//     restaurant_description: 'Home of the Whopper',
//     restaurant_location: '3200 N Washington Ave, Minneapolis, MN 55412',
//     restaurant_hours: '6:00 AM - 10:00 PM',
//   },
];

const seedRestaurants = () => restaurant.bulkCreate(restaurantInfo);

module.exports = seedRestaurants;
