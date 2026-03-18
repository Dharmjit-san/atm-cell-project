const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  
  cardType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Cardtype", cardSchema);
