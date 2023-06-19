import { Drawer, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { UserInfo } from "./UserInfo";
import { Order } from "./Order";
const Container = styled.div`
  display: flex;
`;

const MenuContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 30vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px #0c0c0c solid;
`;
const MenuItem = styled.div`
  height: 85px;
  width: 30vw;
  text-align: center;
  margin-top: 20px;
  background-color: antiquewhite;
  cursor: pointer;
`;
const Menu = styled.h2`
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  padding: 20px;
`;
const Content = styled.div`
  margin-left: 50px;
`;

export const AdminDash = () => {
  const [active, setActive] = useState("info");
  const handleClick = (arg) => {
    setActive(arg);
  };
  return (
    <Container>
      <MenuContainer>
        <MenuItem onClick={() => handleClick("info")}>
          <Menu>Info</Menu>
        </MenuItem>

        <br />

        <MenuItem onClick={() => handleClick("order")}>
          <Menu>Order</Menu>
        </MenuItem>
      </MenuContainer>
      <Content>
        {active === "info" ? <UserInfo></UserInfo> : <Order></Order>}
      </Content>
    </Container>
  );
};
