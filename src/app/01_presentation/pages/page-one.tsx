import React from "react";
import SlideShow from "../components/Slideshow";
import { useSelector } from "react-redux";
import { selectImages } from "../../02_business-domain/product-selectors.selector";
import { Image } from "../../02_business-domain/product.model";

export default function PageOne() {
  const images: Image[] = useSelector(selectImages);
  return <SlideShow images={images} />;
}
