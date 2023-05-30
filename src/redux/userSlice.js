import { createSlice } from "@reduxjs/toolkit";

const cartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginFailure, loginStart, loginSuccess } = userSlice.actions;

export default userSlice.reducer;
