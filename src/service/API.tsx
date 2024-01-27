import axios from "axios";
import { IProductInfo } from "../Modals/Product";

const BASE_URL = "http://localhost:3000";
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

export const addNewProduct = async (product: Partial<IProductInfo>) => {
  try {
    const { status } = await axios.post(
      `${BASE_URL}/products`,
      JSON.stringify(product)
    );
    return status;
  } catch (e) {
    return e;
  }
};

export const updateExistingProduct = async (product: Partial<IProductInfo>) => {
  try {
    const { status } = await axios.patch(
      `${BASE_URL}/products/${product.id}`,
      product
    );
    return status;
  } catch (e) {
    return e;
  }
};

export const deleteProduct = async (id: number | string) => {
  try {
    const { status } = await axios.delete(`${BASE_URL}/products/${id}`);
    return status;
  } catch (e) {
    return e;
  }
};
