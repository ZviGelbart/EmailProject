const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  img: {
    data: Buffer,
    type: String
  },
  Messages: [
    {
      read:{
        type: String,
        required: true,
      },
      unread: {
        type: String,
        required: true,
      }
    }
  ]
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
