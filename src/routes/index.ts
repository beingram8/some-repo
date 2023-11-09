import express, { NextFunction, Request, Response } from "express";
import { sendResponse } from "../utils/response";
import { ApiMessages } from "../constants/apiMessages";
import userRoutes from "./userRoutes";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    sendResponse({ message: ApiMessages.WELCOME_TO_API, res });
  } catch (err) {
    next(err);
  }
});

router.use("/users", userRoutes);

export default router;
