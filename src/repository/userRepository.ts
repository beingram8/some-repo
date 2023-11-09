import UserModel, { User } from "../models/userModel";
import { GetAllParams, QueryParams, UpdateParams } from "../types/database";

export const getUser = ({ query, selectQuery, populate }: QueryParams<User>) =>
  UserModel.findOne(query, selectQuery).populate(populate);

export const createNewUser = (user: User) => UserModel.create(user);

export const getUserByID = (id: string, populate?: any) =>
  UserModel.findById(id).populate(populate);

export const updateUser = ({
  query,
  updateBody,
  options,
}: UpdateParams<User>) =>
  UserModel.findOneAndUpdate(query, updateBody, options);

export const getUsers = ({
  searchQuery = {},
  selectQuery = {},
  populate,
  sortQuery,
  page = 1,
  size = 10,
}: GetAllParams<User>) => {
  let query = UserModel.find(searchQuery)
    .select(selectQuery)
    .skip((page - 1) * size)
    .limit(size);

  if (sortQuery) {
    query = query.sort(sortQuery);
  }

  if (populate) {
    query = query.populate(populate);
  }

  return query;
};

export const createNewUsers = (userModules: User[], options?: any) =>
  UserModel.insertMany(userModules, options);

export const deleteUserById = (id: string) => UserModel.findByIdAndDelete(id);
