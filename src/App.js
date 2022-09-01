import React from "react";
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { showProducts } from "./app/dataSlice";

export default function App() {
  const products = useSelector(showProducts);
  const productsPerPage = 4;
  const [pages, setPages] = useState(productsPerPage);
  const shownProducts = products.slice(0, pages);
  return (
    <>
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
    </>
  );
}

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
