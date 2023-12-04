const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.js");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        res.status(400).json({ message: "Wrong password" });
      } else {
        const token = jwt.sign({ id: user._id, type: "admin" }, "secret");
        res.status(200).json({ token, message: "Logged in successfully" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { login };
