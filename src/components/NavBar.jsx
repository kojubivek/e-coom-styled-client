import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Badge } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Container = styled.div`
  height: 60px;
  background-color: "#000";
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchBar = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 25px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;

export const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchBar>
            {" "}
            <Input />
            <SearchIcon
              style={{ color: "gray", fontSize: "16px" }}
            ></SearchIcon>
          </SearchBar>
        </Left>
        <Center>
          <Logo>FootyBaller</Logo>
          <SportsSoccerIcon />
        </Center>
        <Right>
          <MenuItem>
            <LoginIcon />{" "}
          </MenuItem>
          <MenuItem>
            <AppRegistrationIcon />
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color="primary">
              {" "}
              <ShoppingBagOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
