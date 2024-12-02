export function parseProducts(data: any) {
  const realProducts = data.products.filter(
    (product: any) =>
      product.productTags.includes("product.salad") ||
      product.productTags.includes("product.bowl"),
  );
  return realProducts.map((product: any) => ({
    ...product,
    rating: Math.floor(Math.random() * 6),
  }));
}

export function parseImages(products: any) {
  return products.map((product: any) => ({
    url: `https://static.stadtsalat.de/shop/image/${product.image}`,
    title: product.name,
  }));
}
