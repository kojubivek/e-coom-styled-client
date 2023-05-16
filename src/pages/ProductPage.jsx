import React from "react";
import { styled } from "styled-components";
import { Annoucement } from "../components/Annoucement";
import { NavBar } from "../components/NavBar";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  flex: 1;
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Tittle = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-style: 20px;
  font-weight: 200;
  margin: 20px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  margin: 5px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const FilterSize = styled.select`
  margin-left: 20px;

  padding: 5px;
  border: none;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #e39595;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  margin-left: 20px;
  padding: 15px;
  border: 2px solid #e39595;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  flex-grow: 1;
  &:hover {
    background-color: #c0989856;
  }
`;

export const ProductPage = () => {
  return (
    <Container>
      <Annoucement />
      <NavBar />
      <Wrapper>
        <ImgContainer>
          <Image src={require("../assests/imgs/Ac milan home kit.jpg")} />
        </ImgContainer>
        <InfoContainer>
          <Tittle>AC Milan Home Kit</Tittle>
          <Description>AC Milan Home Kit</Description>
          <Price>$150</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="yellow"></FilterColor>
              <FilterColor color="red"></FilterColor>
              <FilterColor color="blue"></FilterColor>
              <FilterColor color="black"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption disabled selected>
                  Size
                </FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
