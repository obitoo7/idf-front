import React from "react";

import {
  StoreContainer,
  ProductContainer,
  Product,
} from "../styledcomponents/_Store";

import tw from "twin.macro";
import { useEffect } from "react";
import ProductCard from "../components/ProductsCard/ProductCard";

function Store() {
  useEffect(() => {
    fetch("http://localhost:1337/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 96e343675596282ec4cfb5856faacd136eac15db1f93439c8813a4f44c151c340faad6c2acf473f9b9a876603501c1eef04332f33ad80a0f5d159862011ae4b8a09b1d8ffe3c98508cdddba98dac26ffde8dbb40c4b989e96568a727f9e5adcc088ebb2a333cdf0cf220317cc40ac43f7696d066ee9c4c4a128b98f56c34b001",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <StoreContainer>
      <ProductContainer>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </ProductContainer>
    </StoreContainer>
  );
}

export default Store;
