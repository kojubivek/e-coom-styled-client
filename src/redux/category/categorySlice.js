import { createSlice } from "@reduxjs/toolkit";

const catgeoryReducer = createSlice({
  name: "category",
  initialState: {
    categories: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    fetchcategory: (state) => {
      state.isFetching = true;
      state.error = true;
    },
    categorySuccess: (state, action) => {
      state.isFetching = false;

      state.categories = action.payload;
    },
    fetchError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const { reducer, actions } = catgeoryReducer;

export default reducer;

export const { fetchcategory, fetchError, categorySuccess } = actions;
