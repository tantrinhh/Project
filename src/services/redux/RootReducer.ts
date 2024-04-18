import { combineReducers } from "@reduxjs/toolkit";
import cart from "./slices/cart";

import product from "./slices/product";
import compare from "./slices/compare/compare";
import favorite from "./slices/favorite";
const rootReducer = combineReducers({
  product,
  cart,
  compare,
  favorite
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
