const LikedVideo = require("../models/likedVideo");

exports.createOrUpdateLikedVideos = async (req, res) => {
  try {
    let likedVideos = await LikedVideo.findOne({ user: req.user._id });

    if (!likedVideos) {
      likedVideos = new LikedVideo(req.body);
      likedVideos.user = req.user._id;
      likedVideos = await likedVideos.save();

      res.json({ likedVideos });
    } else {
      const likedVideoUpdates = req.body.videos;
      let isVideoPresent = likedVideos.videos.find(
        (video) => video == likedVideoUpdates[0]
      );

      if (isVideoPresent) {
        await LikedVideo.updateOne(
          { user: req.user._id },
          { $pull: { videos: likedVideoUpdates[0] } }
        );
      } else {
        await LikedVideo.updateOne(
          { user: req.user._id },
          { $push: { videos: likedVideoUpdates } }
        );
      }

      res.json({ message: "Successfully updated liked videos" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured", errorMessage: error.message });
  }
};

exports.getLikedVideos = async (req, res) => {
  try {
    const likedVideos = await LikedVideo.find({ user: req.user._id })
      .populate("videos")
      .populate("user");

    res.json({ likedVideos });
  } catch (error) {
    res.status(404).json({
      message: "NOT Found the liked videos for the user",
      errorMessage: error.message,
    });
  }
};
