const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  sender: [{
    email:{
    type: String,
    required: true,
  },
  status:{
    type: String,
    default: "outbox",
    required :true
  },}
],
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
  
});

const emailModel = mongoose.model("email", emailSchema);
module.exports = emailModel;
