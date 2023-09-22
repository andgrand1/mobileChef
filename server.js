const express = require("express");
const hbs = require("handlebars");
const app = express();
// ... Other server setup code ...

const { sequelize } = require("./config/connection");
sequelize.sync({ force: true });

const routes = require("./routes");
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
