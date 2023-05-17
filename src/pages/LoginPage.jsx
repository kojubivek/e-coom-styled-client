import React from "react";
import { styled } from "styled-components";
import BgImg from "../assests/imgs/RegisterBackground.jpg";
import { mobile } from "../responsive";
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
`;
const Link = styled.a`
  margin: 10px 0px;
  font-style: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
export const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Log In</Title>
        <Form>
          <Input placeholder="UserName" />

          <Input placeholder="Password" />

          <Button type="submit">Submit </Button>
          <Link>Forgot Password?</Link>
          <Link>Create A new Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
