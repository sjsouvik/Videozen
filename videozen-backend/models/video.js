const mongoose = require("mongoose");
require("mongoose-type-url");

const videoSchema = new mongoose.Schema(
  {
    videoId: {
      type: String,
      required: [true, "Please enter video id"],
      unique: true,
    },
    title: {
      type: String,
      required: [true, "Please enter title"],
    },
    description: {
      type: String,
      required: [true, "Please enter description"],
    },
    ownerImage: {
      type: mongoose.SchemaTypes.Url,
      required: [true, "Please enter owner's image url"],
    },
    image: {
      type: mongoose.SchemaTypes.Url,
      required: [true, "Please enter thumbnail image url"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);
