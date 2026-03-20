const express = require("express");
const router = express.Router();

const Card = require("../models/Cardtype");


router.get("/cardtype/search", async (req, res) => {
  try {
    const { cardType } = req.query;

    let filter = {};

   if (cardType) {
      filter.cardType = cardType;
    }

    const cards = await Card.find(filter);

    res.json(cards);
  } catch (err) {
    res.json({ message: err.message });
  }
});
module.exports = router;
