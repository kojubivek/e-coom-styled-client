import React, { useState } from "react";
import { styled } from "styled-components";
import BgImg from "../assests/imgs/RegisterBackground.jpg";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${BgImg});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;

  background: #fff;
  min-width: 25%;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
  color: #b87777;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 10px;
  border: none;
  min-width: 25%;
  padding: 15px 20px;
  background-color: #b87777;
  cursor: pointer;
  color: #fff;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
// const Link = styled.a`
//   margin: 10px 0px;
//   font-style: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;
const Error = styled.span`
  color: red;
`;
export const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const location = useLocation();
  const origin = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const { isFetching, error } = useSelector((state) => state.user);
  const token = localStorage.getItem("persist:root");
  const usertoken = JSON.parse(JSON.parse(token)?.user)?.currentUser
    ?.accesstoken;
  console.log(usertoken);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login({ username, password })) && navigate(origin);
  };
  return (
    <>
      <NavBar />
      <Container>
        <Wrapper>
          <Title>Log In</Title>
          <Form>
            <Input
              placeholder="UserName"
              onChange={(e) => setUserName(e.target.value)}
            />

            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button onClick={handleClick} disabled={isFetching} type="submit">
              Submit{" "}
            </Button>
            {error && <Error>something went wrong</Error>}
            <Link>Forgot Password?</Link>
            <Link to="/register">Create A new Account</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};
