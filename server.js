const express = require("express");
const hbs = require("handlebars");
const app = express();
const session = require("express-session");

// ... Other server setup code ...

const { sequelize } = require("./config/connection");
sequelize.sync({ force: true });
app.use(
  session({
    secret: "login secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 6 * 60 * 60 * 1000 },
  })
);

const routes = require("./controllers");
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
