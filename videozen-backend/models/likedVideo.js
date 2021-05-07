const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const likedVideoSchema = new mongoose.Schema(
  {
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

module.exports = mongoose.model("LikedVideo", likedVideoSchema);
