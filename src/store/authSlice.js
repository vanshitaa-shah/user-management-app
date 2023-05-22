import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage: storage,
};

const initialState = {
  users: [],
  currentUser: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register(state, action) {
      const existingUser = state.users.find(
        (user) => user.email === action.payload.email
      );

      if (existingUser) {
        state.error = "User already exists,Login instead!";
        return;
      }

      const newUser = action.payload;
      state.currentUser = action.payload;
      state.isLoggedIn = true;
      state.error = null;
      state.users.push(newUser);
    },

    login(state, action) {
      const { email, password } = action.payload;
      const user = state.users.find((user) => user.email === email);

      if (user) {
        if (user.password === password) {
          state.currentUser = user;
          state.isLoggedIn = true;
          state.error = null;
        } else {
          state.error = "Invalid Password!";
        }
      } else {
        state.error = "User does not exist!";
      }
    },
    logout(state) {
      state.currentUser = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const authActions = authSlice.actions;
export default persistedAuthReducer;
