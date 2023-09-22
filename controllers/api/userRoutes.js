const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const signupdata = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.sessionsave(() => {
      req.session.loggedIn = true;
      res.status(200).json(signupdata);
    });
  } catch (err) {
    res.json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const Logindata = await User.findOne({
      where: { username: req.body.username },
    });
    if (!Logindata) {
      res
        .status(404)
        .json({ message: "Could not find your account please check username" });
      return;
    }

    const Checkpass = await bcrypt.compare(
      req.body.password,
      Logindata.password
    );
    if (!Checkpass) {
      res.status(400).json({ message: "Password did not match your username" });
      return;
    }
    req.sessionsave(() => {
      req.session.loggedIn = true;
    });
    res.status(200).json({ message: "You are now logged in!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
