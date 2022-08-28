import Nav from "../components/Nav";
import React from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { showProducts } from "../app/dataSlice";
import DescriptionCard from "../components/DescriptionCard";
import styled from "styled-components";

export default function PageTwo() {
  const products = useSelector(showProducts);

  return (
    <>
      <Nav />
      <MainContainer>
      {products.map((product) => (
        <DescriptionCard key={nanoid()} product={product} />
      ))}
      </MainContainer>
    </>
  );
}

const MainContainer = styled.section`
  width: 800px;
  margin: 180px auto;
  
`;