import mongoose from "mongoose";
const Data = new mongoose.Schema({

  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  }
})
export const data = new mongoose.model("user", Data);