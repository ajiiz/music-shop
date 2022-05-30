import { deletePromise } from "network/basePromises";
import { DeleteUserRequest, path } from "../../pages/api/account/deleteUser";

export const deleteUser = (payload: DeleteUserRequest) => {
  return deletePromise<DeleteUserRequest>(path, payload);
};
