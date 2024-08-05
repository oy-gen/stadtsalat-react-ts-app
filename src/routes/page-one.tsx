import React from "react";
import SlideShow from "../components/Slideshow";
import { useSelector } from "react-redux";
import { selectImages } from "../app/dataSlice";

export default function PageOne() {
  const images = useSelector(selectImages);
  return <SlideShow images={images} />;
}
