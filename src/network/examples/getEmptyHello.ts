import { GetHelloResponse, path } from "../../../pages/api/examples/getEmptyHello";
import { getEmptyPromise } from "../basePromises";

export const getEmptyHello = () => {
  return getEmptyPromise<GetHelloResponse>(path);
};
