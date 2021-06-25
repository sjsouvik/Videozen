const express = require("express");
const router = express.Router();

const {
  updateUser,
  getAllUsers,
  getUserById,
  getUser,
} = require("../controllers/user");

router.route("/user").get(getAllUsers);

router.param("userId", getUserById);

router.route("/user/:userId").get(getUser).post(updateUser);

module.exports = router;
