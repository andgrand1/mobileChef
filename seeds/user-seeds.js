const { User } = require("../models");

const sampleUser = [
  {
    id: "1",
    username: "m.lol1234",
    password: "l!ttlel0lly",
  },
  {
    id: "2",
    username: "totallytilly",
    password: "willtill90",
  },
  {
    id: "3",
    username: "horsegurl99",
    password: "n3litUDe",
  },
];

const seedUsers = () => User.bulkCreate(sampleUser);

module.exports = seedUsers;
