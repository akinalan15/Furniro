import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Breadcrumb from "./Components/Breadcrumb";
import ProductDetail from "./Components/ProductDetails";
import Description from "./Components/Description";
import ProductCard from "./Components/ProductCard";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <ProductDetail />
      <hr className="h-5 m-5" />
      <Description />
      <ProductCard />
      <Footer />
    </>
  );
}

export default App;
