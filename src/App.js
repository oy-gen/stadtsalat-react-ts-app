import React from "react";
import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import getRandomRating from "./hooks/getRandomRating";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://api.stadtsalat.de/shop/grosse-theaterstrasse-store"
      );
      const data = await result.json();
      const products = data.products.map((product) => ({
        ...product,
        rating: getRandomRating(), // -------------------------------  Hacking "rating-key" into API-Data because API does not have it
      })); 
      setProducts(products);
      // console.log(products);
    }
    fetchData();
  }, []);

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
