import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { popularProducts } from "../data";
import { SingleProducts } from "./SingleProducts";
import { fetchProducts } from "../helper/axiosHelper";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;
export const Product = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { status, products } = await fetchProducts(cat);
        if (status === "success") {
          setProducts(products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);
  return (
    <Container>
      {cat
        ? filteredProducts.map((item, i) => (
            <SingleProducts item={item} key={i} />
          ))
        : popularProducts
            .slice(0, 8)
            .map((item, i) => <SingleProducts item={item} key={i} />)}
    </Container>
  );
};
