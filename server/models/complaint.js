// const nanoid=require('nanoid')
const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  assigned: {
    type: String,
    default: "None",
  },
  panchayat_name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Complaint", complaintSchema);
