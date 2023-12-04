const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
// const multer = require("multer");
// const morgan = require("morgan");
// const helmet = require("helmet");
// const path = require("path");
// const session = require("express-session");
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth.js");
const { verifyToken } = require("./middleware/verify.js");
const userRoutes = require("./routes/storeDetails.js");

const app = express();
const PORT = process.env.PORT || 9000;

dotenv.config();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// middleware
app.use(express.json({ limit: "30mb" }));

app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ credentials: true, origin: true }));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });
const ComplaintRouter = require("./routes/complaint");
app.use("/complaint", ComplaintRouter);

app.get("/", (req, res) => {
  res.send("Hello World here is some change");
});
app.get("/me", verifyToken, (req, res) => {
  res.json("reached");
});

// Routes
app.use("/auth", authRoutes);
app.use("/store", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
