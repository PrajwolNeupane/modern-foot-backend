import express from "express";
import { demo } from "../controller/auth.controller.js";

const router = express.Router();
router.get("/", demo);

export default router;
