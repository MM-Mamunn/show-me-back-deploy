import mongoose from "mongoose";

const FriendSchema = new mongoose.Schema(
  {
    // idd: { type: String, required: true },
    userName1: { type: String, required: true },
    userName2: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

export const Friend = mongoose.model("Friend", FriendSchema);