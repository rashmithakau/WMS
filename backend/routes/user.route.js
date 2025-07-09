import express from "express";
import { createUser } from "../controller/user.controller.js";
import { loginUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);

export default router;
