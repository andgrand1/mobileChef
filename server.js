const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const app = express();
const session = require("express-session");
const routes = require("./controllers");
const path = require("path");

// ... Other server setup code ...

const { sequelize } = require("./config/connection");

app.use(
  session({
    secret: "login secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 6 * 60 * 60 * 1000 },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

const PORT = process.env.PORT || 3000;
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
