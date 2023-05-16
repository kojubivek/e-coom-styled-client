import React from "react";
import { styled } from "styled-components";
import { categories } from "../data";
import { CategoriesItem } from "./CategoriesItem";
const Container = styled.div`
  display: flex;
  padding: 20px;
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map((item, i) => (
        <CategoriesItem key={i} item={item} />
      ))}
    </Container>
  );
};
