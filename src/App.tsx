import { lazy } from "react";

import "./App.css";
import Headers from "./components/Headers";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./components/Home"));
const ProductDetailPage = lazy(() => import("./components/ProductView"));

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<ProductDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
