import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "product",
  initialState: {
    products: [],
    catproducts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    fetchproduct: (state) => {
      state.isFetching = true;
      state.error = true;
    },
    productSuccess: (state, action) => {
      state.isFetching = false;

      state.products = action.payload;
    },
    productcatSuccess: (state, action) => {
      state.isFetching = false;

      state.catproducts.push(action.payload);
    },
    fetchproductError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const { reducer, actions } = productReducer;

export default reducer;

export const {
  fetchproduct,
  fetchproductError,
  productcatSuccess,

  productSuccess,
} = actions;
