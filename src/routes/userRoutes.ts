import express from "express";
import { userController } from "../controllers";
import { userValidator } from "../validations";
const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/", userValidator.createUser, userController.createUser);
router.get("/:id", userController.getUser);

export default router;
