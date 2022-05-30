import { GetAllOrderListResponse, path } from "../../pages/api/orders/getAllOrderList";
import { getEmptyPromise } from "./basePromises";

export const getAllOrderList = () => {
  return getEmptyPromise<GetAllOrderListResponse>(path);
};
