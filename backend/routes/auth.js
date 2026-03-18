const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Login Attempt:", username);
  const user = await User.findOne({ username, password });

  if (!user) {
    console.log("Login Failed");
    return res.json({ status: "error", message: "Invalid login" });
  }

  console.log("Login Success:", user.username);

  res.json({
    status: "success",
    role: user.role,
    username: user.username,
  });
});

module.exports = router;
