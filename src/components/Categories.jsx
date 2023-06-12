import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { categories } from "../data";
import { CategoriesItem } from "./CategoriesItem";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../redux/product/productAction";
import { getcat } from "../redux/category/categoryActions";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

export const Categories = () => {
  const dispatch = useDispatch();

  const allcats = useSelector((state) => state.category.categories);
  useEffect(() => {
    dispatch(getcat());
  }, [dispatch]);
  return (
    <Container>
      {allcats.map((item, i) => (
        <CategoriesItem key={i} item={item} />
      ))}
    </Container>
  );
};
