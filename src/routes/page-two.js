import React from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { showProducts } from "../app/dataSlice";
import DescriptionCard from "../components/DescriptionCard";

export default function PageTwo() {
  const products = useSelector(showProducts);
  return (
    <>
      {products.map((product) => (
        <DescriptionCard key={nanoid()} product={product} />
      ))}
    </>
  );
}
