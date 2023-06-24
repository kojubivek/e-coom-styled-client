import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBycat, getproducts } from "../redux/product/productAction";
import { ProductCard } from "./ProductCard";
const Container = styled.div`
  margin: 3px;
  height: 70vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    display: "flex",
    flexDirection: "column",
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #6549497d;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #021518;
  margin-bottom: 20px;
  text-align: center;
  font-size: 80px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #ffffff8a;
  color: gray;
  font-weight: 600;
  cursor: pointer;
`;
export const CategoriesItem = ({ item }) => {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  const allproducts = useSelector((state) => state.product.products);

  const getselectedProducts = (id) => {
    return allproducts.filter((item) => id === item.parentCat);
  };

  useEffect(() => {
    dispatch(getproducts());
    setproducts(getselectedProducts(item._id));
  }, [item]);
  return (
    <>
      <hr />
      <Title>{item.name}</Title>
      <hr />
      <Container>
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            imageSrc={product.images}
            price={product.price}
          />
        ))}
      </Container>
    </>
  );
};
