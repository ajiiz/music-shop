import { GetHelloRequest, GetHelloResponse, path } from "../../../pages/api/examples/getHello";
import { getPromise } from "../basePromises";

export const getHello = (payload: GetHelloRequest): Promise<GetHelloResponse> => {
  return getPromise<GetHelloRequest, GetHelloResponse>(path, payload);
};
