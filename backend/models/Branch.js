const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({

    branchId: {
    type: String,
    required: true,
    unique: true,
  },
  
  branchName: {
    type: String,
    required: true,
  },

  branchIFSC: {
    type: String,
    required: true,
    default: "UTIB0SCCB01",
  },

  address: String,
  phoneNumber: String,

  status: {
    type: String,
    required: true,
    default: "Active",
  },

});

module.exports = mongoose.model("Branch", branchSchema);
