import { createSlice } from "@reduxjs/toolkit";

const orderReducer = createSlice({
  name: "order",
  initialState: {
    order: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    fetchorder: (state) => {
      state.isFetching = true;
      state.error = true;
    },
    orderSuccess: (state, action) => {
      state.isFetching = false;

      state.order = action.payload;
    },
    fetchError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const { reducer, actions } = orderReducer;

export default reducer;

export const { fetchorder, fetchError, orderSuccess } = actions;
