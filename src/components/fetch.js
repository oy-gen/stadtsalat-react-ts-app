import { useState } from "react";

export default async function fetch() {
  const url = "https://api.stadtsalat.de/shop/grosse-theaterstrasse-store"

  const result = await fetch(url);
  const data = await result.json();
  const filteredProducts = await data.products.filter(
    (p) =>
      p.productTags.includes("product.salad") ||
      p.productTags.includes("product.bowl")
  );
  const adjustedProducts = filteredProducts.map((product) => ({
    ...product,
    rating: Math.floor(Math.random() * 6)
}));
return adjustedProducts // -------------------------------  Hacking "rating-key" into API-Data because API does not have it
}
