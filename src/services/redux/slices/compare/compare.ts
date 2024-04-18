import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Product } from "../product/type";

interface ProductComparisonState {
  comparedProducts: Product[];
}
// Create an entity adapter for managing products
const compareEntity = createEntityAdapter<Product>({
  selectId: (product) => product.id,
});
const initialState: ProductComparisonState = {
  comparedProducts: [],
};

const productComparisonSlice = createSlice({
  name: "productComparison",
  initialState,
  reducers: {
    addToComparison: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      if (!state.comparedProducts.some((p) => p.id === product.id)) {
        state.comparedProducts.push(product);
      }
    },
    removeFromComparison: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      state.comparedProducts = state.comparedProducts.filter(
        (p) => p.id !== product.id
      );
    },
  },
});

export const { addToComparison, removeFromComparison } =
  productComparisonSlice.actions;
export const compareSelector = compareEntity.getSelectors(
  (state: any) => state.comparedProducts
);
export default productComparisonSlice.reducer;
