const express = require("express");
const router = express.Router();
const Complain = require("../models/complaint");
const bodyParser = require("body-parser");
const verifyToken = require("../middleware/verify");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.get("/getcomplaintById/:id", async (req, res) => {
  // console.log(req.params.complaint_id)
  try {
    const complain = await Complain.findById(req.params.id);
    res.json(complain);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.patch(
  "/updatecomplaintById/:id",
  verifyToken.verifyToken,
  async (req, res) => {
    try {
      const complain = await Complain.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.json(complain);
    } catch (err) {
      res.send(err);
    }
  }
);

router.get("/getallcomplaints", async (req, res) => {
  try {
    const complain = await Complain.find({ status: { $ne: "resolved" } });
    res.json(complain);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/addcomplaint", async (req, res) => {
  const d = new Date();
  console.log(
    d.getDate().toString() +
      "-" +
      d.getMonth().toString() +
      "-" +
      d.getFullYear().toString()
  );
  const complain = new Complain({
    status: "Pending",
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    phone: req.body.phone,
    address: req.body.address,
    date:
      d.getDate().toString() +
      "-" +
      d.getMonth().toString() +
      "-" +
      d.getFullYear().toString(),
    panchayat_name: req.body.panchayat_name,
  });
  // console.log(req.params.complaint_id)
  try {
    const complain_added = await complain.save();
    return res.json(complain_added);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
