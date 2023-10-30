import express from "express";
import { addProduct, getAllProduct } from "../controller/product.controller.js";

const router = express.Router();

router.get("/all", getAllProduct);
router.post("/add", addProduct);

export default router;
