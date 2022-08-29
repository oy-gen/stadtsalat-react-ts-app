import React from "react";
import Nav from "./components/Nav";
import { useEffect } from "react";
import ProductCard from "./components/ProductCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  addPaginatedProducts,
  showProducts,
  showPaginatedProducts,
} from "./app/dataSlice";
import { parseProducts, paginateParsedProducts } from "./app/parseData";
// import fetchData from "./app/fetchData";

export default function App() {
  const products = useSelector(showProducts);
  const paginatedProducts = useSelector(showPaginatedProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://api.stadtsalat.de/shop/grosse-theaterstrasse-store/"
      );
      const data = await result.json();
      const parsedProducts = parseProducts(data);
      const paginatedProducts = paginateParsedProducts(parsedProducts);
      dispatch(addPaginatedProducts(paginatedProducts));
      dispatch(addProducts(parsedProducts));
    }
    fetchData();
  }, [dispatch]);

  console.log("products", products);
  console.log("paginated", paginatedProducts);

  return (
    <>
      <Nav />
      <MainContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <ButtonWrapper>
          {" "}
          <Button>Load more</Button>
        </ButtonWrapper>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.section`
  max-width: 1200px;
  margin: 180px auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: large;
  font-weight: 600;
`;
