const express = require("express");
const router = express.Router();
const AuthController = require("../controller/auth.controller");
const middlewares = require("../middlewares");

router.post("/login", AuthController.login);

router.post("/registration", AuthController.registration);

module.exports = router;
