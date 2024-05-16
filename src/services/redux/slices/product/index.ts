import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../RootReducer";
import { AppThunkConfig } from "../../store/thunk-extras";
import { Product } from "./type";

// Create an entity adapter for managing products
const productEntity = createEntityAdapter<Product>({
  selectId: (product) => product.id,
});

// Define the initial state using the entity adapter
const initialState = productEntity.getInitialState();

// Create a product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProduct: productEntity.updateOne,
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      productEntity.setAll(state, action.payload);
    });
  },
});

export default productSlice.reducer;

// Define selectors
export const productSelectors = productEntity.getSelectors(
  (state: RootState) => state.product
);
// Define an async thunk to fetch products
export const getProduct = createAsyncThunk<Product[], void, AppThunkConfig>(
  "product/getProducts",
  async (_, { extra: { api } }) => {
    const res = await api.get<Product[], any>("product");
    return res;
  }
);
