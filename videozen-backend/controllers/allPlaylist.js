const AllPlaylist = require("../models/allPlaylist");

exports.getPlaylistById = async (req, res, next, id) => {
  try {
    const playlist = await AllPlaylist.findById(id).populate("videos");

    if (!playlist) {
      res.json({ message: "NOT Found the playlist" });
    }

    req.playlist = playlist;
    next();
  } catch (error) {
    res.status(400).json({
      message: "Error occured",
      errorMessage: error.message,
    });
  }
};

exports.createPlaylist = async (req, res) => {
  try {
    const newPlaylist = new AllPlaylist(req.body);
    const savedPlaylist = await newPlaylist.save();
    res.json({ savedPlaylist });
  } catch (error) {
    res.status(500).json({
      message: "Unable to save playlist",
      errorMessage: error.message,
    });
  }
};

exports.getAllPlaylists = async (req, res) => {
  try {
    const allPlaylists = await AllPlaylist.find().populate("videos");
    res.json({ allPlaylists });
  } catch (error) {
    res.status(500).json({
      message: "Unable to get playlists",
      errorMessage: error.message,
    });
  }
};

exports.getPlaylist = async (req, res) => {
  let { playlist } = req;
  playlist.__v = undefined;
  res.json({ playlist });
};

exports.addVideosToPlaylist = async (req, res) => {
  try {
    await AllPlaylist.updateOne(
      { _id: req.playlist._id },
      { $push: { videos: req.body.videos } }
    );
    res.json({ message: "Updated the playlist successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured", errorMessage: error.message });
  }
};

exports.deleteVideosFromPlaylist = async (req, res) => {
  try {
    await AllPlaylist.updateOne(
      { _id: req.playlist._id },
      { $pull: { videos: req.body.video } }
    );

    res.json({
      message: "Deleted the videos from playlist successfully",
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured", errorMessage: error.message });
  }
};
