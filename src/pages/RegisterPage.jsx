import React, { useState } from "react";
import { styled } from "styled-components";
import BgImg from "../assests/imgs/Soccerthemebackgro.jpg";
import { mobile } from "../responsive";
import { publicRequest } from "../helper/axiosHelper";
import { useNavigate } from "react-router-dom";

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
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await publicRequest.post("/auth/register", inputs);
    res.data.status === "success" && navigate("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create An Acccount</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="middlename"
            placeholder="Middle Name(optional)"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="username"
            placeholder="UserName"
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            placeholder="Confirm Passord"
            onChange={handleChange}
            required
          />
          <Agreement>
            By Creating an Account. You Agree All The Terms and Conditions
          </Agreement>
          <Button type="submit">Submit </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
