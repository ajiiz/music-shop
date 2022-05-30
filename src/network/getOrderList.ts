import { GetOrderListResponse, path } from "../../pages/api/orders/getOrderList";
import { getEmptyPromise } from "./basePromises";

export const getOrderList = () => {
  return getEmptyPromise<GetOrderListResponse>(path);
};
