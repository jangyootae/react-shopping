import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user.slice";
import categoriesReducer from "../redux/categories.slice";
import productsReducer from "../redux/products.slice";
import productReducer from "../redux/product.slice";
import cartReducer from "../redux/cart.slice";
import orderReducer from "../redux/order.slice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    categories: categoriesReducer,
    products: productsReducer,
  },
});

const RootState = store.getState();
const AppDispatch = store.dispatch;

export default { store, RootState, AppDispatch };
