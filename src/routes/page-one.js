import React from "react";
import SlideShow from "../components/Slideshow";
import { useSelector } from "react-redux";
import { showProducts } from "../app/dataSlice";
import { parseImages } from "../app/parseData";

export default function PageOne() {
  const products = useSelector(showProducts);
  const images = parseImages(products);
  return <SlideShow images={images} />;
}
