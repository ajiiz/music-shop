import { ProductType } from "redux/basketSlice";
import { PriceType } from "./ProductsTypes";

export const getFilteredProducts = (products: ProductType[] | undefined, searchName: string, filter: string, priceRange: PriceType) => {
  if (!products) {
    return products;
  }

  let newProducts = products;

  if (priceRange.maximum !== 0 && priceRange.maximum >= priceRange.minimum) {
    newProducts = newProducts.filter(product => product.price <= priceRange.maximum && product.price >= priceRange.minimum);
  }
  if (searchName && filter) {
    newProducts = newProducts?.filter(product => product.name.includes(searchName));
    return getDropdownFilteredProducts(newProducts, filter);
  }

  if (searchName) {
    return newProducts?.filter(product => product.name.includes(searchName));
  }

  if (filter) {
    return getDropdownFilteredProducts(newProducts, filter);
  }

  return newProducts;
};

const getDropdownFilteredProducts = (products: ProductType[] | undefined, filter: string): ProductType[] | undefined => {
  switch (filter) {
    case "none":
      return products?.sort((a, b) => new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf());
    case "genre":
      return products?.sort((a, b) => a.genre.toLowerCase().localeCompare(b.genre.toLowerCase()));
    case "fromLower":
      return products?.sort((a, b) => a.price - b.price);
    case "fromHigher":
      return products?.sort((a, b) => b.price - a.price);
    case "favourites":
      return products?.filter(product => product.isFavourite);
  }
};
