import { Router } from "express";
import middlewares from "../middlewares.js";
import UserController from "../controller/user.controller.js";

const router = Router();

router.get("/profile", middlewares.checkAuth, UserController.getProfile);

export default router;
