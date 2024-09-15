import mongoose from "mongoose";

const SignupSchema = new mongoose.Schema(
  {
    // idd: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, default: false },
  },
  {
    timestamps: true,
  }
);

export const Signup = mongoose.model("Signup", SignupSchema);