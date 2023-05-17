import React from "react";
import { Annoucement } from "../components/Annoucement";
import { NavBar } from "../components/NavBar";

import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { styled } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ margin: "10px" })}
`;
const Title = styled.h1`
  padding: 20px;
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Image = styled.img`
  width: 40%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  &:hover {
    border: 2px solid #d17f7f;
  }
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductAmount = styled.span`
  font-style: 30px;

  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-style: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 10px;
  min-width: 50vw;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
  margin: 20px;
`;
const SummaryItem = styled.div`
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "800"};
`;
const SummaryItemText = styled.span`
  flex: 1;
`;
const SummaryItemPrice = styled.span`
  flex: 1;
`;
const SummaryButton = styled.button`
  flex: 1;
  width: 100px;
  padding: 10px;
  background: #000;
  color: white;
`;

export const Cart = () => {
  return (
    <Container>
      <Annoucement />
      <NavBar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>

          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={require("../assests/imgs/hoodie.jpg")} />
                <Details>
                  <ProductName>
                    <b>Product:</b>AC milan kit
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>13545843
                  </ProductId>
                  <ProductColor
                    color="#dbcece
                  "
                  />
                  <ProductSize>
                    <b>Size:</b>XL
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <RemoveIcon />
                  <ProductAmount>2</ProductAmount>

                  <AddIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={require("../assests/imgs/chelseaenzo.jpg")} />
                <Details>
                  <ProductName>
                    <b>Product:</b>AC milan kit
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>13545843
                  </ProductId>
                  <ProductColor
                    color="#dbcece
                  "
                  />
                  <ProductSize>
                    <b>Size:</b>XL
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <RemoveIcon />
                  <ProductAmount>2</ProductAmount>

                  <AddIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CheckOut Now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
