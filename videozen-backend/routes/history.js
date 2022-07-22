const express = require("express");
const router = express.Router();

const { getUserById } = require("../controllers/user");

const { createOrUpdateHistory, getHistory } = require("../controllers/history");

router.param("userId", getUserById);

router.route("/history/:userId").get(getHistory).post(createOrUpdateHistory);

module.exports = router;
