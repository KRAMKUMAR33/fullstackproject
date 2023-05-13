const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
  username: {
    type: String,
  },
  dob: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  retypepassword: {
    type: String,
  },
  phone: {
    type: String,
    unique: true,
  },
});

const admin = mongoose.model("admin", adminSchema);
module.exports = admin;
