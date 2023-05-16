import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { styled } from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #d0e8f6f4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Tittle = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 200;
  margin-bottom: 20px;
  letter-spacing: 3.5px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #5caed1;
`;
const Input = styled.input`
  flex: 8;
  border: none;
  height: 75%;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 2;
  background-color: #7af1ddaa;
  cursor: pointer;
  height: 95%;
`;

export const Newsletter = () => {
  return (
    <Container>
      <Tittle>NewsLetter</Tittle>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};
