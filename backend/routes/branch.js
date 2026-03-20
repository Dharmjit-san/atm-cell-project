const express = require("express");
const router = express.Router();

const Branch = require("../models/Branch");

// ADD BRANCH
router.post("/branch/add", async (req, res) => {
  try {
    const { branchName, branchId, address, phoneNumber } = req.body;

    const existingBranch = await Branch.findOne({
      $or: [{ branchName: branchName }, { branchId: branchId }],
    });

    if (existingBranch) {
      return res.json({ status: "error", message: "Branch already exists" });
    }

    const branch = new Branch({
      branchName,
      branchId,
      address,
      phoneNumber
    });

    await branch.save();

    res.json({ status: "success", message: "Branch Added" });
  } catch (err) {
    res.json({ status: "error", message: err.message });
  }
});

// GET ALL BRANCHES
router.get("/branch/list", async (req, res) => {
  const branches = await Branch.find();
  res.json(branches);
});

// DELETE BRANCH
router.delete("/branch/delete/:id", async (req, res) => {
  await Branch.findByIdAndDelete(req.params.id);

  res.json({ message: "Branch Deleted" });
});

module.exports = router;
