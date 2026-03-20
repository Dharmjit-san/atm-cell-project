const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    unique: true,
  },
    roleId: {
    type: String,
    required: true,
    unique: true,
  },
});


module.exports = mongoose.model("Role", userSchema);
