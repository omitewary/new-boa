const mongoose = require("mongoose");

const SecuritySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  exchageListed: {
    type: String,
    required: true,
    unique: true
  },
  marketPrice: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("security", SecuritySchema);
