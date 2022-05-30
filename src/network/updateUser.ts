import { UpdateUserRequest, path } from "../../pages/api/account/updateUser";
import { postPromise } from "./basePromises";

export const updateUser = (payload: UpdateUserRequest) => {
  return postPromise<UpdateUserRequest>(path, payload);
};
