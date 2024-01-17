const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  sender: {
    email: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "outbox",
      required: true,
    },
  },
  destinations: [{
    email: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "inbox",
      required: true,
    },
    read : {
      type: Boolean,
      default: false
  }
  }],
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
});

const emailModel = mongoose.model("email", emailSchema);
module.exports = emailModel;
