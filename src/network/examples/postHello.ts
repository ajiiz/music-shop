import { PostHelloRequest, path } from "../../../pages/api/examples/postHello";
import { postPromise } from "../basePromises";

export const postHello = (payload: PostHelloRequest) => {
  return postPromise<PostHelloRequest>(path, payload);
};
