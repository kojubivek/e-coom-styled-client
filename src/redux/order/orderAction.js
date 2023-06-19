import { userRequest } from "../../helper/axiosHelper";
import { orderSuccess, fetchError, fetchorder } from "./orderSlice";

export const getOrder = (id) => async (dispatch) => {
  dispatch(fetchorder());
  console.log("orderfetching");
  try {
    const res = await userRequest.get(`order/find/${id}`);
    console.log("orderfetched");
    console.log(res, "order");
    if (res.data.status === "success") {
      dispatch(orderSuccess(res.data.order));
    }
  } catch (error) {
    dispatch(fetchError());
  }
};
