const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const historySchema = new mongoose.Schema(
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

module.exports = mongoose.model("History", historySchema);
