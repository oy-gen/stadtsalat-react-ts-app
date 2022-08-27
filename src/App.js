import React from "react";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { Counter } from "./components/Counter";
import styled from "styled-components";
// import { useDispatch, useSelector } from "react-redux";
// import {setUpProducts, selectProducts} from '../src/features/products/productSlice'
// import fetchDataThunk from "./features/products/fetchDataThunk";
// import { createStoreHook } from "react-redux";

function App() {
  // const storeProducts = useSelector(selectProducts);
  const [products, setProducts] = useState([]);
  //  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://api.stadtsalat.de/shop/grosse-theaterstrasse-store"
      );
      const data = await result.json();
      const realProducts = data.products.filter(
        (p) =>
          p.productTags.includes("product.salad") ||
          p.productTags.includes("product.bowl")
      );
      const adjustedProducts = realProducts.map((product) => ({
        ...product,
        rating: Math.floor(Math.random() * 6), // -------------------------------  Hacking "rating-key" into API-Data because API does not have it
      }));
      setProducts(adjustedProducts);
      // dispatch(setUpProducts(adjustedProducts));
    }
    fetchData();
  }, []);

  console.log(products);
  // console.log("STORE", storeProducts);

  return (
    <>
      <Nav />
      <MainContainer>
        <Counter products={products} />
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </MainContainer>
    </>
  );
}

const MainContainer = styled.section`
  max-width: 1200px;
  margin: 180px auto;
`;

export default App;
