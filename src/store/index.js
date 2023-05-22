import { configureStore } from "@reduxjs/toolkit";
import persistedAuthReducer from "./authSlice";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
});

export default store;
export const persistor = persistStore(store);
