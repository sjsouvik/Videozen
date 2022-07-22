const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const playlistSchemaInCreatedPlaylist = mongoose.Schema({
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
});

const createdPlaylistSchema = new mongoose.Schema(
  {
    playlist: [playlistSchemaInCreatedPlaylist],
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CreatedPlaylist", createdPlaylistSchema);
