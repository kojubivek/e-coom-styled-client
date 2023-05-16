import React from "react";
import { styled } from "styled-components";
const Container = styled.div`
  height: 30px;
  background-color: #800020;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;
export const Annoucement = () => {
  return (
    <Container>Super Cheap FootBal Apperals.Free Shipping over $60.</Container>
  );
};
