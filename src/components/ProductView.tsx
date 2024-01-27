import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProductInfo } from "../Modals/Product";
import { getSingleProduct } from "../service/API";
import CardContainer from "./CardContainer";
import NoProduct from "./NoProduct";

const ProductView = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<IProductInfo>(null);
  const [initialize, setInitialize] = useState<Boolean>(false);
  const getProductbyId = async (id: number | string) => {
    const data = await getSingleProduct(id);
    setProduct(data);
    !!data && setInitialize(true);
  };
  useEffect(() => {
    getProductbyId(productId);
  }, [productId, initialize]);
  console.log({ productId });
  return initialize ? (
    <CardContainer {...product} isEditProduct />
  ) : (
    <NoProduct />
  );
};

export default ProductView;
