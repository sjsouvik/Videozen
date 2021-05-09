const express = require("express");
const router = express.Router();

const {
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
  getUser,
} = require("../controllers/user");

router.route("/user").get(getAllUsers).post(createUser);

router.param("userId", getUserById);

router.route("/user/:userId").get(getUser).post(updateUser);

module.exports = router;
