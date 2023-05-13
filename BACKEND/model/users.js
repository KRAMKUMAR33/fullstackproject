const mongoose = require("mongoose");
const usersSchema = mongoose.Schema({
  username: {
    type: String,
  },
  dob: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    require:true,
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

const users = mongoose.model("users", usersSchema);
module.exports = users;
