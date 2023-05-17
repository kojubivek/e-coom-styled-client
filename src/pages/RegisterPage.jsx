import React from "react";
import { styled } from "styled-components";
import BgImg from "../assests/imgs/Soccerthemebackgro.jpg";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${BgImg}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  min-width: 25%;

  background: #fff;
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
  border: nonw;
  padding: 15px 20px;
  background-color: #b87777;
  cursor: pointer;
  color: #fff;
  flex: 1;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
export const RegisterPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Acccount</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Middle Name(optional)" />
          <Input placeholder="Last Name" />
          <Input placeholder="UserName" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Passord" />
          <Agreement>
            By Creating an Account. You Agree All The Terms and Conditions
          </Agreement>
          <Button type="submit">Submit </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
