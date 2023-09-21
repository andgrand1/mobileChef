const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const newUser = req.body;
    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.json(err);
  }
});
