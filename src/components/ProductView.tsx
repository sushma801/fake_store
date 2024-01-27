import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProductInfo } from "../Modals/Product";
import { getSingleProduct } from "../service/API";
import CardContainer from "./CardContainer";
import NoProduct from "./NoProduct";

const ProductView = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<IProductInfo>({} as IProductInfo);
  const [initialize, setInitialize] = useState<boolean>(false);
  const getProductbyId = async (id: number | string) => {
    const data = await getSingleProduct(id);
    setProduct(data);
    !!data && setInitialize(true);
  };
  useEffect(() => {
    productId && getProductbyId(productId);
  }, [productId, initialize]);

  return initialize ? (
    <CardContainer {...product} isEditProduct />
  ) : (
    <NoProduct />
  );
};

export default ProductView;
