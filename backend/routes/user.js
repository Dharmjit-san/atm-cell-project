const express = require("express");
const router = express.Router();

const User = require("../models/User");

// ADD USER
router.post("/user/add", async (req, res) => {
  try {
    const { name, username, password, role, branch } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.json({
        status: "error",
        message: "User already exists",
      });
    }

    const user = new User({
      name,
      username,
      password,
      role,
      branch,
    });

    await user.save();

    res.json({ status: "success", message: "User Added" });
  } catch (err) {
    res.json({ status: "error", message: err.message });
  }
});
// GET USER LIST
router.get("/user/list", async (req, res) => {
  const users = await User.find();

  res.json(users);
});

// DELETE USER
router.delete("/user/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.json({ message: "User Deleted" });
});

module.exports = router;
