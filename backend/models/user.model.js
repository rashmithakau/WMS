import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    phoNumber: {
      type: String,
      required: true,
      match: [/^0\d{9}$/, 'Phone number must be 10 digits and start with 0'],
    },
    password: {
      type: String,
      required: true,
      minlenngth: 8,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User",userSchema);

export default User;
