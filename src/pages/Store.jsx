import React from "react";

import {
  StoreContainer,
  ProductContainer,
  Product,
} from "../styledcomponents/_Store";

import tw from "twin.macro";
import { useEffect } from "react";
import ProductCard from "../components/ProductsCard/ProductCard";
import ProductCategory from "../components/CategoryCard/CategoryCard";

function Store() {

  return (
    <StoreContainer>
      <ProductContainer>
      <ProductCategory/>
      <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
        <ProductCategory/>
      </ProductContainer>
    </StoreContainer>
  );
}

export default Store;
