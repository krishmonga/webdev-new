import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const commentSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video", // Reference to the Video model
      required: false, // A comment can be related to a video or a tweet (or other models)
    },
    tweet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet", // Reference to the Tweet model
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);
commentSchema.plugin(mongooseAggregatePaginate)
export const Comment = mongoose.model("Comment", commentSchema);
