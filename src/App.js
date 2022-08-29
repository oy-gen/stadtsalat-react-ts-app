import React from "react";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, showProducts } from "./app/dataSlice";
import fetchData from "./app/fetchData";

export default function App() {
  const dispatch = useDispatch();
  const products = useSelector(showProducts);
  const productsPerPage = 4;
  const [pages, setPages] = useState(productsPerPage);
  const shownProducts = products.slice(0, pages);

  useEffect(() => {
    fetchData().then((products) => dispatch(addProducts(products)));
  }, [dispatch]);

  return (
    <>
      <Nav />
      <MainContainer>
        {shownProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <ButtonWrapper>
          <Button
            onClick={() => {
              setPages(pages + productsPerPage);
            }}
            disabled={products.length === shownProducts.length}
          >
            Load more
          </Button>
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
