const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const authRoutes = require("./routes/auth");
const branchRoutes = require("./routes/branch");
const userRoutes = require("./routes/user");
const roleRoutes = require("./routes/role");
const cardRoutes = require("./routes/card");

app.use(cors());
app.use(express.json()); // Must come before routes

app.use("/api", authRoutes);
app.use("/api", cardRoutes);
app.use("/api", branchRoutes);
app.use("/api", userRoutes);
app.use("/api", roleRoutes);
mongoose
  .connect("mongodb://127.0.0.1:27017/atmcardportal")
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
