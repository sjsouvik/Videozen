const CreatedPlaylist = require("../models/createdPlaylist");

exports.getAllPlaylists = async (req, res) => {
  try {
    const createdPlaylists = await CreatedPlaylist.find()
      .populate("user")
      .populate("playlist.videos");

    res.json({ createdPlaylists });
  } catch (error) {
    res.status(500).json({
      message: "Unable to get created playlists",
      errorMessage: error.message,
    });
  }
};

exports.getPlaylist = async (req, res) => {
  try {
    const createdPlaylist = await CreatedPlaylist.findOne({
      user: req.user._id,
    })
      .populate("user")
      .populate("playlist.videos");

    res.json({ createdPlaylist });
  } catch (error) {
    res
      .status(404)
      .json({
        message: "NOT Found the created playlist for the user",
        errorMessage: error.message,
      });
  }
};

exports.createOrUpdatePlaylist = async (req, res) => {
  try {
    let createdplaylist = await CreatedPlaylist.findOne({
      user: req.user._id,
    });

    if (!createdplaylist) {
      createdplaylist = new CreatedPlaylist(req.body);
      createdplaylist.user = req.user._id;
      createdplaylist = await createdplaylist.save();
      res.json({
        message: "Created 1st playlist for the user",
        createdplaylist,
      });
    } else {
      let playlistUpdates = req.body.playlist[0];
      const currentPlaylist = createdplaylist.playlist.find(
        (playlist) => playlist.name === playlistUpdates.name
      );

      if (currentPlaylist) {
        const isVideoPresent = currentPlaylist.videos.find(
          (video) => video == playlistUpdates.videos[0]
        );

        if (isVideoPresent) {
          await CreatedPlaylist.updateOne(
            { user: req.user._id, "playlist.name": playlistUpdates.name },
            { $pull: { "playlist.$.videos": playlistUpdates.videos[0] } }
          );
        } else {
          await CreatedPlaylist.updateOne(
            { user: req.user._id, "playlist.name": playlistUpdates.name },
            { $push: { "playlist.$.videos": playlistUpdates.videos[0] } }
          );
        }
      } else {
        await CreatedPlaylist.updateOne(
          { user: req.user._id },
          { $push: { playlist: playlistUpdates } }
        );
      }

      res.json({ message: "Successfully updated the playlist" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured", errorMessage: error.message });
  }
};

exports.deletePlaylist = async (req, res) => {
  try {
    await CreatedPlaylist.updateOne(
      { user: req.user._id },
      { $pull: { playlist: req.body } }
    );

    res.json({
      message: "Successfully deleted the playlist from created playlists",
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured", errorMessage: error.message });
  }
};
