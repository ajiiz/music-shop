import { GetProductsResponse, path } from "../../pages/api/products/getProducts";
import { getEmptyPromise } from "./basePromises";

export const getProducts = () => {
  return getEmptyPromise<GetProductsResponse>(path);
};
