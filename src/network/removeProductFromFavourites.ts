import { RemoveProductFromFavouritesRequest, path } from "../../pages/api/products/removeProductFromFavourites";
import { postPromise } from "./basePromises";

export const removeProductFromFavourites = (payload: RemoveProductFromFavouritesRequest) => {
  return postPromise<RemoveProductFromFavouritesRequest>(path, payload);
};
