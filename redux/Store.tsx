import { configureStore } from "@reduxjs/toolkit";
import woodItemSlice from "./features/woodItems/woodItemSlice";

const store = configureStore({
  reducer: {
    products: woodItemSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
