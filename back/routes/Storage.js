const express = require("express");
const router = express.Router();
const StorageController = require("../controller/storage.controller");
const middlewares = require("../middlewares");

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

module.exports = router;
