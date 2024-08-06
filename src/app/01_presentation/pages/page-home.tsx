import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectProducts } from "../../02_business-domain/product-selectors.selector";
import { Product } from "../../02_business-domain/product.model";

export default function PageHome() {
  const products: Product[] = useSelector(selectProducts);
  const productsPerPage = 4;
  const [amountOfProductsToShow, setAmountOfProductsToShow] =
    useState(productsPerPage);
  const shownProducts = products.slice(0, amountOfProductsToShow);
  return (
    <>
      {shownProducts.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <ButtonWrapper>
        <Button
          onClick={() => {
            setAmountOfProductsToShow(amountOfProductsToShow + productsPerPage);
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
