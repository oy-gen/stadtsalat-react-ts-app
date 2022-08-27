import React from "react";
import Nav from "./components/Nav";
import { useEffect } from "react";
import ProductCard from "./components/ProductCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, showProducts } from "./app/dataSlice";

function App() {
  const products = useSelector(showProducts);
  const dispatch = useDispatch();

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
      dispatch(addProducts(adjustedProducts));
    }
    fetchData();
  }, [dispatch]);

  console.log(products);

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
