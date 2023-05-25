import React, { useState } from "react";
import { styled } from "styled-components";
import { NavBar } from "../components/NavBar";
import { Annoucement } from "../components/Annoucement";
import { Product } from "../components/Product";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("popular");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Annoucement />
      <NavBar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product</FilterText>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
          </Select>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>

            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>

          <Select onChange={(e) => setSort(e.target.value)}>
            <Option disabled>Select</Option>
            <Option value="Lowest">Lowest</Option>
            <Option value="Highest">Highest</Option>
            <Option value="HighestSaving">Highest Saving</Option>
            <Option value="Discount">Discount</Option>
            <Option value="Popular">Popular</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};
