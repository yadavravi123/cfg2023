const mongoose = require("mongoose");

const waterQualitySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  schemeID: {
    type: String,
  },
  panchayatArea: {
    type: String,
    required: true,
  },
  waterQualityLevel: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    require: true,
  },
});
module.exports = mongoose.model("WaterQuality", waterQualitySchema);
