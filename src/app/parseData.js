export function parseProducts(data) {
  const realProducts = data.products.filter(
    (product) =>
      product.productTags.includes("product.salad") ||
      product.productTags.includes("product.bowl")
  );
  const parsedProducts = realProducts.map((product) => ({
    ...product,
    rating: Math.floor(Math.random() * 6),
  }));
  return parsedProducts;
}

export function paginateParsedProducts(parsedProducts) {
  const productsPerPage = 4;

  function sliceIntoChunks(parsedProducts, productsPerPage) {
    const result = [];
    for (let i = 0; i < parsedProducts.length; i += productsPerPage) {
      const chunk = parsedProducts.slice(i, i + productsPerPage);
      result.push(chunk);
    }
    return result;
  }
  const productChunks = sliceIntoChunks(parsedProducts, productsPerPage);
  return productChunks;
}

export function parseImages(products) {
  const images = products.map((product) => ({
    url: `https://static.stadtsalat.de/shop/image/${product.image}`,
    title: product.name,
  }));
  return images;
}
