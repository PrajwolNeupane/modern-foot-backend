import express from "express";
import {
  addProduct,
  getAllProduct,
  getProductByCategory,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/all", getAllProduct);
router.get("/", getProductByCategory);
router.post("/add", addProduct);

export default router;
