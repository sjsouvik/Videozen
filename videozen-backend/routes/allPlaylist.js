const express = require("express");
const router = express.Router();

const {
  createPlaylist,
  getAllPlaylists,
  getPlaylistById,
  getPlaylist,
  addVideosToPlaylist,
  deleteVideosFromPlaylist,
} = require("../controllers/allPlaylist");

router.route("/allplaylist").get(getAllPlaylists).post(createPlaylist);

router.param("playlistId", getPlaylistById);

router
  .route("/allplaylist/:playlistId")
  .get(getPlaylist)
  .post(addVideosToPlaylist)
  .delete(deleteVideosFromPlaylist);

module.exports = router;
