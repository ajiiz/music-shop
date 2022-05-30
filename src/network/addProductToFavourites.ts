import { AddProductToFavouritesRequest, path } from "../../pages/api/products/addProductToFavourites";
import { postPromise } from "./basePromises";

export const addProductToFavourites = (payload: AddProductToFavouritesRequest) => {
  return postPromise<AddProductToFavouritesRequest>(path, payload);
};
