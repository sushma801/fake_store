import React, { useEffect, useMemo, useState } from "react";
import { getAllProducts } from "../service/API";
import { IProductInfo } from "../Modals/Product";
import CardContainer from "./CardContainer";
import NoProduct from "./NoProduct";
import { StyledHome } from "./Home.module";
import SubHeader from "./SubHeader";

const Home = () => {
  const [products, setProducts] = useState<Array<IProductInfo>>([]);
  const [originalProducts, setOriginalProducts] =
    useState<Array<IProductInfo>>(products);
  const [searchValue, setSearchValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [initialized, setInitialized] = useState<boolean>(false);

  const getAllTheData = async () => {
    const data = await getAllProducts();
    console.log({ data }, data.length);
    setProducts(data);
    setOriginalProducts(data);
    data.length > 0 && setInitialized(true);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);

    const newProducts = products.filter((product) =>
      product.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setProducts(newProducts);
    // if (value !== searchValue) {
    //   setProducts(originalProducts);
    // }
  };

  const handleSelectCategory = (value: string) => {
    setCategoryValue(value);

    const newProducts = products.filter(
      (product) => product.category === value
    );
    setProducts(newProducts);
    // if (value !== categoryValue) {
    //   setProducts(originalProducts);
    // }
  };

  useEffect(() => {
    getAllTheData();
  }, [products.length]);

  return (
    <>
      <SubHeader
        onSearch={handleSearch}
        onSelectCategory={handleSelectCategory}
      />
      <StyledHome>
        {initialized ? (
          products.map((product, index) => (
            <CardContainer
              {...product}
              key={index}
              handleReload={() => window.location.reload()}
            />
          ))
        ) : (
          <NoProduct />
        )}
      </StyledHome>
    </>
  );
};

export default Home;
