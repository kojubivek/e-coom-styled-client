import { publicRequest } from "../../helper/axiosHelper";
import {
  fetchproduct,
  fetchproductError,
  productSuccess,
  productcatSuccess,
} from "./productSlice";

export const getproducts = () => async (dispatch) => {
  dispatch(fetchproduct());
  try {
    const res = await publicRequest.get("/products");

    if (res.data.status === "success") {
      dispatch(productSuccess(res.data.products));
    }
  } catch (error) {
    dispatch(fetchproductError());
  }
};

export const getProductsBycat = (id) => async (dispatch) => {
  dispatch(fetchproduct());
  try {
    const res = await publicRequest.get(`/products/${id}`);

    if (res.data.status === "success") {
      dispatch(productcatSuccess(res.data.products));
    }
  } catch (error) {
    dispatch(fetchproductError());
  }
};
