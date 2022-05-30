import { CreateOrderRequest, path } from "../../pages/api/orders/createOrder";
import { postPromise } from "./basePromises";

export const createOrder = (payload: CreateOrderRequest) => {
  return postPromise<CreateOrderRequest>(path, payload);
};
