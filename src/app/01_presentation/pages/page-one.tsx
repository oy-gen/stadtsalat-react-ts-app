import React from "react";
import SlideShow from "../components/Slideshow";
import { useSelector } from "react-redux";
import { Image } from "../../03_data-domain/get-stadtsalat-data/models/product-model";
import { selectImages } from "../../02_business-domain/product-selectors.selector";

export default function PageOne() {
  const images: Image[] = useSelector(selectImages);
  return <SlideShow images={images} />;
}
