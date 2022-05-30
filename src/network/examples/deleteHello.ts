import { DeleteHelloRequest, path } from "../../../pages/api/examples/deleteHello";
import { deletePromise } from "../basePromises";

export const deleteHello = (payload: DeleteHelloRequest) => {
  return deletePromise<DeleteHelloRequest>(path, payload);
};
