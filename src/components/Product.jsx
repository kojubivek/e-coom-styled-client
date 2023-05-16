import React from "react";
import { styled } from "styled-components";
import { popularProducts } from "../data";
import { SingleProducts } from "./SingleProducts";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;
export const Product = () => {
  return (
    <Container>
      {popularProducts.map((item, i) => (
        <SingleProducts item={item} key={i} />
      ))}
    </Container>
  );
};
