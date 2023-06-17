import { publicRequest } from "../helper/axiosHelper";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { toast } from "react-toastify";

export const login = (user) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    res.data.status === "success"
      ? dispatch(loginSuccess(res.data)) &&
        toast[res.data.status](res.data.message)
      : dispatch(loginFailure()) && toast[res.data.status](res.data.message);
  } catch (error) {
    dispatch(loginFailure());
  }
};
