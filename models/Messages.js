import mongoose from "mongoose";

const MessagesSchema = new mongoose.Schema(
  {
    // idd: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true},
    text: { type: String, required: true},
    seen: { type: Boolean,default:false, required: false}
  },
  {
    timestamps: true,
  }
);

export const Messages = mongoose.model("Messages", MessagesSchema);