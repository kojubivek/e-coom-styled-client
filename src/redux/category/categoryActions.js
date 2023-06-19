import { publicRequest } from "../../helper/axiosHelper";
import { categorySuccess, fetchError, fetchcategory } from "./categorySlice";

export const getcat = () => async (dispatch) => {
  dispatch(fetchcategory());
  try {
    const res = await publicRequest.get("/category");
    console.log(res.data.data);
    if (res.data.status === "success") {
      dispatch(categorySuccess(res.data.data));
    }
  } catch (error) {
    console.log(error);
    dispatch(fetchError());
  }
};
