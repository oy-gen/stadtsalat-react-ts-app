import React from "react";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { Counter } from "./features/counter/Counter";
import styled from "styled-components";
import { createStore } from "react-redux";

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
      const adjustedProducts = realProducts.map((product) => ({
        ...product,
        rating: Math.floor(Math.random() * 6), // -------------------------------  Hacking "rating-key" into API-Data because API does not have it
      }));
      setProducts(adjustedProducts);
    }
    fetchData();
  }, []);

  console.log(products);

  return (
    <>
      <Nav />
      <MainContainer>
        <Counter />
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
