const express = require("express");
const router = express.Router();

const { getUserById } = require("../controllers/user");

const {
  createOrUpdateWatchLaterVideos,
  getWatchLaterVideos,
} = require("../controllers/watchLater");

router.param("userId", getUserById);

router
  .route("/likedvideo/:userId")
  .get(getWatchLaterVideos)
  .post(createOrUpdateWatchLaterVideos);

module.exports = router;
