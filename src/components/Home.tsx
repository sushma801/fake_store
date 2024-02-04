 
import { useEffect, useState } from "react";
import { getAllProducts } from "../service/API";
import { IProductInfo } from "../Modals/Product";
import CardContainer from "./CardContainer";
import NoProduct from "./NoProduct";
import { StyledHome } from "./Home.module";
import SubHeader from "./SubHeader";

const Home = () => {
  const [products, setProducts] = useState<Array<IProductInfo>>([]);
  const [filterProducts, setFilterProducts] = useState<Array<IProductInfo>>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const [initialized, setInitialized] = useState<boolean>(false);

  const getAllTheData = async () => {
    const data = await getAllProducts();
    setProducts(data);

    data.length > 0 && setInitialized(true);
  };

  const handleSearch = (value: string) => {
    if (value !== "") {
      const newProducts = products.filter((product) =>
        product.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setIsFiltered(true);
      setFilterProducts(newProducts);
    } else {
      setIsFiltered(false);
      setFilterProducts([]);
    }
  };

  const handleSelectCategory = (value: string) => {
    if (value !== "_") {
      const newProducts = products.filter(
        (product) => product.category === value
      );
      setIsFiltered(true);
      setFilterProducts(newProducts);
    } else {
      setIsFiltered(false);
      setFilterProducts([]);
    }
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
          isFiltered ? (
            filterProducts.map((product, index) => (
              <CardContainer
                {...product}
                key={index}
                handleReload={() => window.location.reload()}
              />
            ))
          ) : (
            products.map((product, index) => (
              <CardContainer
                {...product}
                key={index}
                handleReload={() => window.location.reload()}
              />
            ))
          )
        ) : (
          <NoProduct />
        )}
      </StyledHome>
    </>
  );
};

export default Home;
