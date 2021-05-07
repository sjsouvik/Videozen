const mongoose = require("mongoose");
require("mongoose-type-url");

const { ObjectId } = mongoose.Schema;

const allPlaylistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter playlist name"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Please enter description of the playlist"],
    },
    owner: {
      type: String,
      required: [true, "Please enter playlist owner's name"],
    },
    image: {
      type: mongoose.SchemaTypes.Url,
      required: [true, "Please enter image url for the playlist'"],
    },
    videos: [
      {
        type: ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("AllPlaylist", allPlaylistSchema);
