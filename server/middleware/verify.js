const mysecret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    const token = req.headers["authorization"];
    // console.log("-------------", token);
    if (!token) {
      return res.status(403).send({ message: "No token provided." });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded) {
      req.userId = decoded.id;
      req.type = decoded.type;
      next();
    } else res.status(500).send({ message: "Failed to authenticate token." });
  },
};
