import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    videos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video", // Reference to the Video model
      },
    ],
    isPublic: {
      type: Boolean,
      default: true, // Determines if the playlist is public or private
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export const Playlist = mongoose.model("Playlist", playlistSchema);
