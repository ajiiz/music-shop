import { SignupRequest, path } from "../../../pages/api/auth/signup";
import { postPromise } from "../basePromises";

export const signup = (payload: SignupRequest) => {
  return postPromise<SignupRequest>(path, payload);
};
