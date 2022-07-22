const express = require("express");
const router = express.Router();

const { getUserById } = require("../controllers/user");

const {
  createOrUpdateLikedVideos,
  getLikedVideos,
} = require("../controllers/likedVideo");

router.param("userId", getUserById);

router
  .route("/likedvideo/:userId")
  .get(getLikedVideos)
  .post(createOrUpdateLikedVideos);

module.exports = router;
