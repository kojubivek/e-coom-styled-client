import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { mobile } from "../responsive";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
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
  return (
    <div>
      <Container>
        <Link to={`/products/${item.cat}`}>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
          </Info>
        </Link>
      </Container>
    </div>
  );
};
