const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const attendenceSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: [String],
    required: true,
  },
  chlorineLevel: {
    type: [String],
    required: true,
  },
});

const PumpOperator = new Schema({
  username: {
    type: String,
    required: true,
  },
  attendence: {
    type: [attendenceSchema],
  },
});

module.exports = mongoose.model("Pump_Operator", PumpOperator);
