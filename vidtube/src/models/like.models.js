import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video", // Reference to the Video model
      required: false, // A like can be related to a video or a tweet (or other models)
    },
    tweet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet", // Reference to the Tweet model
      required: false,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export const Like = mongoose.model("Like", likeSchema);
