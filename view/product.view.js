import express from "express";
import { addProduct, getAllProduct } from "../controller/product.controller.js";

const router = express.Router();

/**
 * @swagger
 * /all:
 *   get:
 *     summary: Get a list of products
 *     description: Retrieve a list of all products.
 *     responses:
 *       200:
 *         description: A list of products.
 */

router.get("/all", getAllProduct);
router.post("/add", addProduct);

export default router;
