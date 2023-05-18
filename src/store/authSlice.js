import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user-info")) || {},
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("user-info", JSON.stringify(state.user));
      localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
    },
    logout(state) {
      state.user = {};
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
      localStorage.removeItem("user-info");
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
