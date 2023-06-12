import { publicRequest } from "../helper/axiosHelper";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login = (user) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
