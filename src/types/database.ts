import { FilterQuery, SortOrder } from "mongoose";

export type SelectQuery = string | { [key: string]: 0 | 1 };

export interface QueryParams<T> {
  query: FilterQuery<T>;
  selectQuery?: SelectQuery;
  populate?: any;
}

export interface UpdateParams<T> {
  query: FilterQuery<T>;
  updateBody: any;
  options?: any;
}

export interface GetAllParams<T> {
  searchQuery?: FilterQuery<T>;
  selectQuery?: SelectQuery;
  sortQuery?: Record<string, SortOrder>;
  populate?: any;
  page?: number;
  size?: number;
}
