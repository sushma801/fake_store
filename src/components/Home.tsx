/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getAllProducts } from "../service/API";
import { IProductInfo } from "../Modals/Product";
import CardContainer from "./CardContainer";
import NoProduct from "./NoProduct";
import { StyledHome } from "./Home.module";
import SubHeader from "./SubHeader";

const Home = () => {
  const [products, setProducts] = useState<Array<IProductInfo>>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [originalProducts, setOriginalProducts] =
    useState<Array<IProductInfo>>(products);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchValue, setSearchValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [initialized, setInitialized] = useState<boolean>(false);
  console.log(originalProducts, searchValue, categoryValue);

  const getAllTheData = async () => {
    const data = await getAllProducts();
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
