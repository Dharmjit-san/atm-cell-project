const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  
  cardType: {
    type: String,
    required: true,
  },

  roleId: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Cardtype", cardSchema);
