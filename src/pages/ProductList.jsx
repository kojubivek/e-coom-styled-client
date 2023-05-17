import React from "react";
import { styled } from "styled-components";
import { NavBar } from "../components/NavBar";
import { Annoucement } from "../components/Annoucement";
import { Product } from "../components/Product";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { mobile } from "../responsive";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  border: none;
  padding: 10px;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
  border: none;
  font-size: 16px;
  font-weight: 600;
`;

export const ProductList = () => {
  return (
    <Container>
      <Annoucement />
      <NavBar />
      <Title>Jersey</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product</FilterText>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Color
            </Option>

            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>

          <Select>
            <Option disabled selected>
              Select
            </Option>
            <Option>Lowest</Option>
            <Option>Highest</Option>
            <Option>Highest Saving</Option>
            <Option>Discount</Option>
            <Option>Popular</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product />
      <Newsletter />
      <Footer />
    </Container>
  );
};
