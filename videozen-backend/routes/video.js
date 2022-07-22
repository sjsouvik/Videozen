const express = require("express");
const router = express.Router();

const Video = require("../models/video");

const { extend } = require("lodash");

const {
  createVideo,
  getAllVideos,
  getVideoById,
  getVideo,
  updateVideo,
} = require("../controllers/video");

router.route("/video").get(getAllVideos).post(createVideo);

router.param("videoId", getVideoById);

router.route("/video/:videoId").get(getVideo).post(updateVideo);

module.exports = router;
