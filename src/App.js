import React from "react";
import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import getRandomRating from "./hooks/getRandomRating";
import styled from "styled-components";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://api.stadtsalat.de/shop/grosse-theaterstrasse-store"
      );
      const data = await result.json();
      const realProducts = data.products.filter(
        (p) =>
          p.productTags.includes("product.salad") ||
          p.productTags.includes("product.bowl")
      );
      const products = realProducts.map((product) => ({
        ...product,
        rating: getRandomRating(), // -------------------------------  Hacking "rating-key" into API-Data because API does not have it
      }));
      setProducts(products);
      console.log(products);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <CardContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardContainer>
    </>
  );
}

const CardContainer = styled.section`
  margin-top: 150px;
`;

export default App;
