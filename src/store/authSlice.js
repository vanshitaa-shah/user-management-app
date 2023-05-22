import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("current-user")) || {},
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  isError: false,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.filter(
        (user) => user.email === action.payload.email
      )[0];
      if (!existingUser) {
        state.isError = false;
        localStorage.setItem(
          "users",
          JSON.stringify([...users, action.payload])
        );
        state.isLoggedIn = true;
        localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
        state.currentUser = action.payload;
        localStorage.setItem("current-user", JSON.stringify(action.payload));
      } else {
        state.isError = true;
        state.errorMessage = "User already exists,login instead!";
      }
    },
    login(state, action) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userInfo = users.filter(
        (user) => user.email === action.payload.email
      )[0];
      if (userInfo) {
        if (userInfo.password === action.payload.password) {
          state.currentUser = userInfo;
          state.isError = false;
          state.isLoggedIn = true;
          localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
          localStorage.setItem("current-user", JSON.stringify(userInfo));
        } else {
          state.isError = true;
          state.errorMessage = "Invalid password!";
        }
      } else {
        state.isError = true;
        state.errorMessage = "User does not exist!";
      }
    },
    logout(state) {
      state.currentUser = {};
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
      localStorage.removeItem("current-user");
    },
    clearError(state) {
      if (state.isError) state.isError = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
