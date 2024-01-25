import React, { useEffect, useState } from "react";
import { getAllProducts } from "../service/API";
import { IProductInfo } from "../Modals/Product";
import CardContainer from "./CardContainer";
import NoProduct from "./NoProduct";
import { StyledHome } from "./Home.module";

const Home = () => {
  const [products, setProducts] = useState<Array<IProductInfo>>([]);
  const [initialized, setInitialized] = useState<boolean>(false);
  const getAllTheData = async () => {
    const data = await getAllProducts();
    console.log({ data });
    setProducts(data);
    data.length > 0 && setInitialized(true);
  };
  useEffect(() => {
    getAllTheData();
  }, []);
  return (
    <StyledHome>
      {initialized ? (
        products.map((product) => <CardContainer {...product} />)
      ) : (
        <NoProduct />
      )}
    </StyledHome>
  );
};

export default Home;
