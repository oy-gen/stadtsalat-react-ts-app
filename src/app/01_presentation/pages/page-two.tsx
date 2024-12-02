import React from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import DescriptionCard from "../components/DescriptionCard";
import { selectProducts } from "../../02_business-domain/product-selectors.selector";
import { Product } from "../../02_business-domain/product.model";

export default function PageTwo() {
  const products: Product[] = useSelector(selectProducts);
  return (
    <>
      {products.map((product: any) => (
        <DescriptionCard key={nanoid()} product={product} />
      ))}
    </>
  );
}
