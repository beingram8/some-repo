import { sendResponse } from "../utils/response";
import { ControllerFunction } from "../types/common";
import { StatusCodes } from "http-status-codes";
import { userService } from "../services";

export const getAllUsers: ControllerFunction = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    sendResponse({ res, data: users });
  } catch (error) {
    next(error);
  }
};

export const createUser: ControllerFunction = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);

    sendResponse({ res, data: user, statusCode: StatusCodes.CREATED });
  } catch (error) {
    next(error);
  }
};

export const getUser: ControllerFunction = async (req, res, next) => {
  try {
    const user = await userService.getUserByID(req.params.id);

    sendResponse({ res, data: user });
  } catch (error) {
    next(error);
  }
};
