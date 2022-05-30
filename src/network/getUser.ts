import { getEmptyPromise } from "network/basePromises";
import { GetUserResponse, path } from "../../pages/api/account/getUser";

export const getUser = () => {
  return getEmptyPromise<GetUserResponse>(path);
};
