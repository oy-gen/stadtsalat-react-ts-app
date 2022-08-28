import React from "react";
import Nav from "./components/Nav";
import { useEffect } from "react";
import ProductCard from "./components/ProductCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, showProducts } from "./app/dataSlice";
import fetchData from "./app/fetchData";
import { parseProducts, paginateParsedProducts } from "./app/parseProducts";

export default function App() {
  const products = useSelector(showProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://api.stadtsalat.de/shop/grosse-theaterstrasse-store/"
      );
      const data = await result.json();
      const products = parseProducts(data);
      dispatch(addProducts(products));
    }
    fetchData();
  }, [dispatch]);

  console.log("products", products);

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
