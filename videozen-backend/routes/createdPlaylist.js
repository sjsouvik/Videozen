const express = require("express");
const router = express.Router();

const { getUserById } = require("../controllers/user");

const {
  createOrUpdatePlaylist,
  getAllPlaylists,
  getPlaylist,
  deletePlaylist,
} = require("../controllers/createdPlaylist");

router.route("/createdplaylist").get(getAllPlaylists);

router.param("userId", getUserById);

router
  .route("/createdplaylist/:userId")
  .get(getPlaylist)
  .post(createOrUpdatePlaylist)
  .delete(deletePlaylist);

module.exports = router;
