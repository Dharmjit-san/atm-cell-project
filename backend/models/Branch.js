const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  branchName: {
    type: String,
    required: true,
    unique: true,
  },

  branchCode: {
    type: String,
    required: true,
    unique: true,
  },

  location: String,
  manager: String,
});

module.exports = mongoose.model("Branch", branchSchema);
