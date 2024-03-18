import { Router } from "express";
import StorageController from "../controller/storage.controller.js";
import middlewares from "../middlewares.js";

const router = Router();

router.get("/", middlewares.checkAuth, StorageController.getProducts);

router.post(
  "/add_product",
  middlewares.checkAuth,
  StorageController.addProduct
);

router.post(
  "/subtract_product",
  middlewares.checkAuth,
  StorageController.subtractProduct
);

router.delete(
  "/delete",
  middlewares.checkAuth,
  StorageController.deleteProduct
);

router.post(
  "/augment_product",
  middlewares.checkAuth,
  StorageController.augmentProduct
);

export default router;
