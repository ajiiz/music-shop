import { GetUsersResponse, path } from "../../pages/api/account/getUsers";
import { getEmptyPromise } from "./basePromises";

export const getUsers = () => {
  return getEmptyPromise<GetUsersResponse>(path);
};
