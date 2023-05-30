import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const key =
  "pk_test_51N9oqqKp09rCNEEW9mVq4Ebllv6E4RWpQjcQPMNBB13Ag6oBBiU0ytXUlPEJ8VyhD3nmKri8awFMKMELqF0EyKxL00u7o5VjQ4";
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
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
export const Pay = ({ children }) => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <Container>
      <StripeCheckout
        name="FootyBaller"
        billingAddress
        shippingAddress
        description="Your total is $30"
        amount={3000}
        token={onToken}
        stripeKey={key}
      ></StripeCheckout>
    </Container>
  );
};
