const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const register = async (req, res) => {
  try {
    const {
      name,
      address,
      phone,
      panchayatArea,
      username,
      password,
      type,
      schemeID,
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      address,
      phone,
      panchayatArea,
      username,
      schemeID,
      type,
      password: passwordHash,
    });
    await newUser.save();
    res.status(201).json({ message: "successfully registered" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register };
