export default async function fetchData() {
  const result = await fetch(
    "https://api.stadtsalat.de/shop/grosse-theaterstrasse-store"
  );
  const data = await result.json();
  const realProducts = data.products.filter(
    (p) =>
      p.productTags.includes("product.salad") ||
      p.productTags.includes("product.bowl")
  );
  const products = realProducts.map((product) => ({
    ...product,
    rating: Math.floor(Math.random() * 6), // -------------------------------  Hacking "rating-key" into API-Data because API does not have it
  }));
  console.log(products);
  return products;
}
