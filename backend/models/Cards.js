const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({

  cardNumber: {
    type: String,
    unique: true,
    required: true,
  },

  cardType: {
    type: String,
    required: true,
  },

  branch: {
    type: String,
    default: "HO",
  },

  status: {
    type: String,
    default: "Available",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  transferDate: { 
    type: Date, default: Date.now 
  },

});

module.exports = mongoose.model("Card", cardSchema);
