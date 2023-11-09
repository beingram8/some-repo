import { userRepository } from "../repository";
import { IUser } from "../models/userModel";
import { NotFoundError } from "../errors/errorClass";
import { ApiMessages } from "../constants/apiMessages";

export const getUsers = async (): Promise<IUser[]> => {
  const users = (await userRepository.getUsers({})) as IUser[];
  if (users.length === 0) throw new NotFoundError(ApiMessages.USERS_NOT_FOUND);
  return users;
};

export const getUserByID = async (id: string): Promise<IUser> => {
  const user = (await userRepository.getUserByID(id)) as IUser;
  if (!user) throw new NotFoundError(ApiMessages.USER_NOT_FOUND);
  return user;
};

export const createUser = async (user: IUser): Promise<IUser> => {
  const newUser = (await userRepository.createNewUser(user)) as IUser;
  return newUser;
};
