const express = require("express");
const router = express.Router();

const Card = require("../models/Cards");

// ADD CARD RANGE
router.post("/card/add", async (req, res) => {
  const { startCard, endCard, cardType } = req.body;

  let cards = [];

  for (let i = startCard; i <= endCard; i++) {
    cards.push({
      cardNumber: i.toString(),
      cardType: cardType,
    });
  }

  await Card.insertMany(cards);

  res.json({ message: "Cards Added Successfully" });
});

// GET CARD LIST
router.get("/card/list", async (req, res) => {
  const cards = await Card.find();

  res.json(cards);
});

// DELETE CARD
router.delete("/card/delete/:id", async (req, res) => {
  await Card.findByIdAndDelete(req.params.id);

  res.json({ message: "Card Deleted" });
});

// TRANSFER CARDS
router.post("/card/transfer", async (req, res) => {
  try {
    const { fromBranch, toBranch, quantity } = req.body;

    const cards = await Card.find({
      branch: fromBranch,
      status: "Available",
    }).limit(quantity);

    if (cards.length < quantity) {
      return res.json({
        status: "error",
        message: "Not enough cards available",
      });
    }

    for (let card of cards) {
      card.branch = toBranch;
      card.transferDate = new Date();

      await card.save();
    }

    res.json({
      status: "success",
      message: "Cards transferred successfully",
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
    });
  }
});

router.get("/card/search", async (req, res) => {
  try {
    const { branch, cardType } = req.query;

    let filter = {};

    if (branch) {
      filter.branch = branch;
    }

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
