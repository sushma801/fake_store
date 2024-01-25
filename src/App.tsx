import { lazy } from "react";
import "./App.css";
import ProductView from "./components/ProductView";

import "./App.css";
import Headers from "./components/Headers";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:productId" element={<ProductView />} />
      </Routes>
    </>
  );
}

export default App;
