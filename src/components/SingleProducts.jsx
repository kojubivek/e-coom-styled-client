import React from "react";
import { styled } from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
`;
const Circle = styled.div``;
const Image = styled.img`
  height: 75%;
  width: 100%;
`;
const Info = styled.div``;
const Icon = styled.div``;
export const SingleProducts = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};
