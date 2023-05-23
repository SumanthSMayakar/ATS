const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "FirstName field must be filled.."],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, "LastName field must be filled.."],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Email field must be filled.."],
    trim: true,
    unique: [true, "email must be filled"],
  },

  password: {
    type: String,
    required: [true, " Password field must be filled."],
    trim: true,
  },

  mobile: {
    type: String,
    required: [true, "mobile field must be filed"],
    trim: true,
    unique: [true, "mobile number has been registered"],
  },

  address: {
    type: Array,
    default: [],
  },

  role: {
    type: String,
    default: "user",
  },

  isActive: {
    type: Boolean,
    default: true,
  },
}, 
{
    collection : "visitors",
    timestamps : true
});

module.exports = mongoose.model("Visitors", visitorSchema)