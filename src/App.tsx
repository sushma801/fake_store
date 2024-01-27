import "./App.css";
import ProductView from "./components/ProductView";

import "./App.css";
import Headers from "./components/Headers";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:productId" element={<ProductView />} />
        <Route path="/add_product" element={<ProductForm />} />
      </Routes>
    </>
  );
}

export default App;
