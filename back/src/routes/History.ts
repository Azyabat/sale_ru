import { Router } from "express";
import historyController from "../controller/history.controller.js";
import middlewares from "../middlewares.js";

const router = Router();

router.get("/", middlewares.checkAuth, historyController.getHistory);

export default router;
