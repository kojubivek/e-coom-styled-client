import axios from "axios";

const backendURL = "http://localhost:8000/api/v1";

const api = process.env.API || backendURL;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Njg2ODkwMmY0NTE4MmQ3ZTk2ODM3MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODQ1Njk2MjQsImV4cCI6MTY4NDgyODgyNH0.RcGUhlfA5460YRqQUtty75h3s4Ms4moZ7C5mCgPbfXk";

const productApi = api + "/products";

export const publicRequest = axios.create({
  baseURL: api,
});

export const userRequest = axios.create({
  baseURL: api,
  header: {
    token: `Bearer ${TOKEN}`,
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
