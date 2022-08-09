//=======================----------------->{ Import }<-------------=======================================//

const mongoose = require("mongoose");

//=======================----------------->{ User Schema }<-------------=======================================//

const userSchema = new mongoose.Schema(
  {
    fname:        { type: String, required: true, trim: true },
    lname:        { type: String, required: true, trim: true },
    email:        { type: String, required: true, unique: true, trim: true },
    profileImage: { type: String, required: true },
    phone:        { type: String, required: true, unique: true, trim: true },
    password:     { type: String, required: true, trim: true, min: 8, max: 15 },
    address:      {
      shipping: {
        street:   { type: String, required: true, trim: true },
        city:     { type: String, required: true, trim: true },
        pincode:  { type: Number, required: true, trim: true },
      },
      billing: {
        street:   { type: String, required: true, trim: true },
        city:     { type: String, required: true, trim: true },
        pincode:  { type: Number, required: true, trim: true },
      },
    },
  },
  { timestamps: true }
);

//=======================----------------->{ Export }<-------------=======================================//

module.exports = mongoose.model("user", userSchema);


/***********+++++*********+++++++++**********+++++++***********++++++++*******+++++++++*********++++++***********/