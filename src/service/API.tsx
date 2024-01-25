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

export const getSingleProduct = async (id: number | string) => {
  try {
    const { data: product } = await axios.get(`${BASE_URL}/products/${id}`);
    console.log({ product });
    return product;
  } catch (e) {
    return e;
  }
};
