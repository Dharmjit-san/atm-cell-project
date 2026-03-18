const express = require("express");
const router = express.Router();

const Role = require("../models/Role");

// GET Role LIST
router.get("/role/list", async (req, res) => {
  const roles = await Role.find();

  res.json(roles);
});

module.exports = router;
