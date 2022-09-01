import React from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { selectProducts } from "../app/dataSlice";
import DescriptionCard from "../components/DescriptionCard";

export default function PageTwo() {
  const products = useSelector(selectProducts);
  return (
    <>
      {products.map((product) => (
        <DescriptionCard key={nanoid()} product={product} />
      ))}
    </>
  );
}
