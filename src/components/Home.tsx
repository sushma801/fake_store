import React, { useEffect, useState } from "react";
import { getAllProducts } from "../service/API";
import { IProductInfo } from "../Modals/Product";
import CardContainer from "./CardContainer";
import NoProduct from "./NoProduct";
import { StyledHome } from "./Home.module";
import SubHeader from "./SubHeader";

const Home = () => {
  const [products, setProducts] = useState<Array<IProductInfo>>([]);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selecteCategory, setSelecteCategory] = useState<string>("");
  const getAllTheData = async () => {
    const data = await getAllProducts();
    console.log({ data });
    setProducts(data);
    data.length > 0 && setInitialized(true);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    const newProducts = products.filter((product) =>
      product.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setProducts(newProducts);
  };
  const handleSelectCategory = (value: string) => {
    setSelecteCategory(value);
    const newProducts = products.filter(
      (product) => product.category === value
    );
    setProducts(newProducts);
  };
  useEffect(() => {
    getAllTheData();
  }, []);
  return (
    <>
      <SubHeader
        onSearch={handleSearch}
        onSelectCategory={handleSelectCategory}
      />
      <StyledHome>
        {initialized ? (
          products.map((product, index) => (
            <CardContainer {...product} key={index} />
          ))
        ) : (
          <NoProduct />
        )}
      </StyledHome>
    </>
  );
};

export default Home;
