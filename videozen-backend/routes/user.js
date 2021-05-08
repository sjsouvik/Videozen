const express = require("express");
const router = express.Router();

const { extend } = require("lodash");

const User = require("../models/user");

router
  .route("/user")
  .get(async (req, res) => {
    try {
      const users = await User.find();
      res.json({ users });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Unable to get users", errorMessage: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const newUser = new User(req.body);
      const savedUser = await newUser.save();
      res.json({ savedUser });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Unable to save user", errorMessage: error.message });
    }
  });

router.param("userId", async (req, res, next, id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "NOT Found the user" });
    }

    req.user = user;
    next();
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured", errorMessage: error.message });
  }
});

router
  .route("/user/:userId")
  .get((req, res) => {
    let { user } = req;
    user.__v = undefined;
    res.json({ user });
  })
  .post(async (req, res) => {
    try {
      let { user } = req;
      const userUpdates = req.body;
      user = extend(user, userUpdates);
      user = await user.save();
      res.json({ user });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error occured", errorMessage: error.message });
    }
  });

module.exports = router;
