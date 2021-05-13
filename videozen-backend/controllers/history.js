const History = require("../models/history");

exports.createOrUpdateHistory = async (req, res) => {
  try {
    let history = await History.findOne({ user: req.user._id });

    if (!history) {
      history = new History(req.body);
      history.user = req.user._id;
      history = await history.save();
      res.json({ history });
    } else {
      const historyUpdates = req.body.videos;
      const isVideoPresent = history.videos.find(
        (video) => video == historyUpdates[0]
      );

      if (isVideoPresent) {
        await History.updateOne(
          { user: req.user._id },
          { $pull: { videos: historyUpdates[0] } }
        );
      } else {
        await History.updateOne(
          { user: req.user._id },
          { $push: { videos: historyUpdates } }
        );
      }

      res.json({ message: "Successfully updated the history" });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error occured",
      errorMessage: error.message,
    });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = await History.findOne({ user: req.user._id })
      .populate("videos")
      .populate("user");
    res.json({ history });
  } catch (error) {
    res.status(400).json({
      message: "Error occured",
      errorMessage: error.message,
    });
  }
};
