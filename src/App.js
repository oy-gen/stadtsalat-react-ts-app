import React from "react";
import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://api.stadtsalat.de/shop/grosse-theaterstrasse-store"
      );
      const data = await result.json();
      setProducts(data.products);
      return products;
    }
    fetchData();
  });

  return (
    <>
      <Header />
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default App;
