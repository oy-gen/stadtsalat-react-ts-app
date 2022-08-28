export function parseProducts(data) {
  const realProducts = data.products.filter(
    (product) =>
      product.productTags.includes("product.salad") ||
      product.productTags.includes("product.bowl")
  );
  const totalProducts = realProducts.map((product) => ({
    ...product,
    rating: Math.floor(Math.random() * 6),
  }));
  return totalProducts;
}

export function paginateParsedProducts(data) {
  const productsPerPage = 3;
  const totalProducts = parseProducts(data);

  function sliceIntoChunks(totalProducts, productsPerPage) {
    const result = [];
    for (let i = 0; i < totalProducts.length; i += productsPerPage) {
      const chunk = totalProducts.slice(i, i + productsPerPage);
      result.push(chunk);
    }
    return result;
  }
  console.log(sliceIntoChunks(totalProducts, productsPerPage));
}

export function parseImages(products) {
  const images = products.map((product) => ({
    url: `https://static.stadtsalat.de/shop/image/${product.image}`,
    title: product.name,
  }));
  return images;
}
