const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.controller");
const middlewares = require("../middlewares");

router.get("/profile", middlewares.checkAuth, UserController.getProfile);

module.exports = router;
