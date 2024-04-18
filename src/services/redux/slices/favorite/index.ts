import {  createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from "../product/type";

interface FavoriteTypes {
    list: Product[]
}
const favoriteEntity = createEntityAdapter<Product>({
  selectId: (product) => product.id,
});
const initialState: FavoriteTypes = {
  list: [],
};
const favoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      if (!state.list.some((p) => p.id === product.id)) {
        state.list.push(product);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      state.list = state.list.filter(
        (p) => p.id !== product.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
export const favoriteSelector = favoriteEntity.getSelectors(
  (state: any) => state.favoritedProducts
);