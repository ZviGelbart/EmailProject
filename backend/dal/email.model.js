const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  destination: {
    type: [String],
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const emailModel = mongoose.model("email", emailSchema);
module.exports = emailModel;
