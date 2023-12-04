const express = require("express");
const {
  setPumpOperatorDetails,
  setWaterTeamDetails,
} = require("../controllers/getDetails.js");

const router = express.Router();

router.post("/pumpDetails", setPumpOperatorDetails);
router.post("/waterTeam", setWaterTeamDetails);

module.exports = router;
