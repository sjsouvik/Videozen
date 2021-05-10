const Video = require("../models/video");

const { extend } = require("lodash");

exports.getVideoById = async (req, res, next, id) => {
  try {
    const video = await Video.findById(id);

    if (!video) {
      return res.status(404).json({ message: "NOT Found the video" });
    }

    req.video = video;
    next();
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured", errorMessage: error.message });
  }
};

exports.createVideo = async (req, res) => {
  try {
    const newVideo = new Video(req.body);
    const savedVideo = await newVideo.save();
    res.json({ savedVideo });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to save video", errorMessage: error.message });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json({ videos });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to get videos", errorMessage: error.message });
  }
};

exports.getVideo = async (req, res) => {
  let { video } = req;
  video.__v = undefined;
  res.json({ video });
};

exports.updateVideo = async (req, res) => {
  try {
    const videoUpdates = req.body;
    let updatedVideo = extend(req.video, videoUpdates);
    updatedVideo = await updatedVideo.save();
    res.json({ updatedVideo });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured", errorMessage: error.message });
  }
};
