import { userRepository } from "../repository";
import { User } from "../models/userModel";
import { NotFoundError } from "../errors/httpErrors";
import { ApiMessages } from "../constants/apiMessages";

export const getUsers = async (): Promise<User[]> => {
  const users = (await userRepository.getUsers({})) as User[];
  if (users.length === 0) throw new NotFoundError(ApiMessages.USERS_NOT_FOUND);
  return users;
};

export const getUserByID = async (id: string): Promise<User> => {
  const user = (await userRepository.getUserByID(id)) as User;
  if (!user) throw new NotFoundError(ApiMessages.USER_NOT_FOUND);
  return user;
};

export const createUser = async (user: User): Promise<User> => {
  const newUser = (await userRepository.createNewUser(user)) as User;
  return newUser;
};
