import { parseProducts } from "./parseData";

export default async function fetchData() {
  const result = await fetch(
    "https://api.stadtsalat.de/shop/grosse-theaterstrasse-store/"
  );
  const data = await result.json();
  const parsedProducts = parseProducts(data);
  return parsedProducts;
}
