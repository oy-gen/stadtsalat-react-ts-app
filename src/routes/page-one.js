import Nav from "../components/Nav";
import styled from "styled-components";
import React from "react";
import SlideShow from "../components/Slideshow";
import { useSelector } from "react-redux";
import { showProducts } from "../app/dataSlice";
import { parseImages } from "../app/parseData";

export default function PageOne() {
  const products = useSelector(showProducts);
  const images = parseImages(products);
  console.log(products);
 console.log(images);

  return (
    <>
    <Nav/>
      <MainContainer>
        <SlideShow images={images}/>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.section`
  width: 800px;
  height: 500px;
  margin: 180px auto;
`;
