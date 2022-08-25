import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

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
        rating: Math.floor(Math.random() * 6), // -------------------------------  Hacking "rating-key" into API-Data because API does not have it
      }));
      setProducts(products);
      console.log(products);
    }
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <MainContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </MainContainer>
    </>
  );
}

const MainContainer = styled.section`
  max-width: 1200px;
  margin: 180px auto;
`;

export default App;
