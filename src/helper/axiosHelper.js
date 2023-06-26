import axios from "axios";

const backendURL = "http://localhost:8000/api/v1";

const api = process.env.API || backendURL;

export const getToken = () => {
  const storage = JSON.parse(localStorage.getItem("persist:root"))?.user;

  const TOKEN = storage && JSON.parse(storage)?.currentUser?.accesstoken;
  return TOKEN;
};

export const userRequest = axios.create({
  baseURL: api,
});

userRequest.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default userRequest;

// export const userRequest = axios.create({
//   baseURL: api,
//   headers: {
//     Authorization: `Bearer ${getToken()}`,
//   },
// });

const productApi = api + "/products";

export const publicRequest = axios.create({
  baseURL: api,
});

export const fetchProducts = async (cat) => {
  try {
    console.log(`${productApi}?category=${cat}`);
    const res = await axios.get(
      cat ? `${productApi}?category=${cat}` : productApi
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
