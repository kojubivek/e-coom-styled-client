import axios from "axios";

const backendURL = "http://localhost:8000/api/v1";

const api = process.env.API || backendURL;
const storage = JSON.parse(localStorage.getItem("persist:root"))?.user;

const TOKEN = storage && JSON.parse(storage).currentUser?.accesstoken;

console.log("storage", storage);

const productApi = api + "/products";

export const publicRequest = axios.create({
  baseURL: api,
});

export const userRequest = axios.create({
  baseURL: api,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
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
