const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const createdPlaylistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name of the playlist"],
    },
    videos: [
      {
        type: ObjectId,
        ref: "Video",
      },
    ],
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CreatedPlaylist", createdPlaylistSchema);
