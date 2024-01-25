import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";
export const getAllProducts = async () => {
  try {
    const { data: products } = await axios.get(`${BASE_URL}/products`);
    return products;
  } catch (e) {
    return e;
  }
};
