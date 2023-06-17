import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Badge, Menu } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getcat } from "../redux/category/categoryActions";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { loginSuccess, logoutSuccess } from "../redux/userSlice";
import localStorage from "redux-persist/es/storage";
const Container = styled.div`
  height: 80px;
  background-color: "#000";
  margin-bottom: 20px;

  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchBar = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-right: 8px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Bottom = styled.div`
  width: 100vw;
  background-color: #d16767;
  justify-content: center;
  display: flex;
`;

const NavItems = styled.div`
  height: 50px;
  margin-right: 25px;
  align-items: center;

  padding: 10px;
  cursor: pointer;

  :hover {
    color: white;
  }
`;

const Text = styled.h3``;

const Title = styled.h1``;

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quantity = useSelector((state) => state.cart?.cartItems?.length);
  const catItems = useSelector((state) => state.category.categories);
  const catName = catItems?.map((items) => items.name);

  const getUser = useSelector((state) => state.user.currentUser);

  console.log(getUser, "cartitems");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

    navigate("/");
  };
  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("persist:root");

    window.location.reload();
  };
  useEffect(() => {
    dispatch(getcat());
  }, [dispatch]);
  const handleClick = (e) => {
    const category = e;
    console.log(category, "clicked");
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchBar>
            {" "}
            <Input placeholder="Search" />
            <SearchIcon
              style={{ color: "gray", fontSize: "16px" }}
            ></SearchIcon>
          </SearchBar>
        </Left>
        <Center>
          <Link to="/">
            {" "}
            <Logo Title="Footyballer">FootyBaller</Logo>
          </Link>

          <SportsSoccerIcon />
        </Center>
        <Right>
          {getUser?._id ? (
            <MenuItem>
              <Text onClick={handleClickMenu}>
                {" "}
                Welcome, {getUser.username}
                <KeyboardArrowDownIcon />
              </Text>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleLogout}>
                  <Text>Logout</Text>
                </MenuItem>
              </Menu>
            </MenuItem>
          ) : (
            <>
              <MenuItem Title="Login Here">
                <Link to="/login">
                  <LoginIcon />{" "}
                </Link>
              </MenuItem>

              <MenuItem Title="Register Here">
                <Link to="/register">
                  <AppRegistrationIcon />
                </Link>
              </MenuItem>
            </>
          )}

          <Link to="/cart">
            <MenuItem Title="Your Shopping Bag">
              <Badge badgeContent={quantity} color="primary">
                {" "}
                <ShoppingBagOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
      <Bottom>
        {catItems?.map((items, i) => (
          <NavItems key={items._id}>
            <Link to={`/products/${items._id}`}>
              <Title>{items.name}</Title>
            </Link>
          </NavItems>
        ))}
      </Bottom>
    </Container>
  );
};
