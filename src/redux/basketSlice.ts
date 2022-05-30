import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

export type ProductType = {
  id: string;
  name: string;
  price: number;
  details: string;
  genre: string;
  imageSrc: string;
  createdAt: Date;
  isFavourite: boolean;
};

export type BasketSlice = {
  products: ProductType[];
};

const initialState: BasketSlice = {
  products: []
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<ProductType>) => {
      state.products = [...state.products, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<ProductType>) => {
      let isFound = false;
      let foundIndex = null;
      const currentProducts = current(state).products;
      currentProducts.forEach((product, index) => {
        if (!isFound && product === action.payload) {
          isFound = true;
          foundIndex = index;
        }
      });
      if (isFound && foundIndex !== null) {
        const newBasket = [...currentProducts];
        newBasket.splice(foundIndex, 1);
        state.products = [...newBasket];
      }
    },
    removeAllFromBasket: (state, action: PayloadAction<ProductType>) => {
      const currentProducts = current(state).products;
      const newBasket = currentProducts.filter(product => product.id !== action.payload.id);
      state.products = [...newBasket];
    },
    clearBasket: state => {
      state.products = [];
    }
  }
});

export const { addToBasket, removeFromBasket, removeAllFromBasket, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
