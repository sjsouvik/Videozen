const WatchLater = require("../models/watchLater");

exports.createOrUpdateWatchLaterVideos = async (req, res) => {
  try {
    let watchLaterVideo = await WatchLater.findOne({ user: req.user._id });

    if (!watchLaterVideo) {
      watchLaterVideo = new WatchLater(req.body);
      watchLaterVideo.user = req.user._id;
      watchLaterVideo = await watchLaterVideo.save();

      res.json({ watchLaterVideo });
    } else {
      const watchLaterVideoUpdates = req.body.videos;
      let isVideoPresent = watchLaterVideo.videos.find(
        (video) => video == watchLaterVideoUpdates[0]
      );

      if (isVideoPresent) {
        await WatchLater.updateOne(
          { user: req.user._id },
          { $pull: { videos: watchLaterVideoUpdates[0] } }
        );
      } else {
        await WatchLater.updateOne(
          { user: req.user._id },
          { $push: { videos: watchLaterVideoUpdates } }
        );
      }

      res.json({ message: "Successfully updated watch later videos" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured", errorMessage: error.message });
  }
};

exports.getWatchLaterVideos = async (req, res) => {
  try {
    const watchLaterVideos = await WatchLater.findOne({ user: req.user._id })
      .populate("videos")
      .populate("user");

    res.json({ watchLaterVideos });
  } catch (error) {
    res.status(404).json({
      message: "NOT Found the watch later videos for the user",
      errorMessage: error.message,
    });
  }
};
