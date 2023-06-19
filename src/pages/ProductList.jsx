import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { NavBar } from "../components/NavBar";
import { Annoucement } from "../components/Annoucement";
import { Product } from "../components/Product";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { ImageContainer, ProductCard } from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../redux/product/productAction";
import { Skeleton } from "@mui/material";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  ${mobile({ marginTop: "200px" })}
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

const Wrapper = styled.div`
  display: flex;
  padding: 20px;

  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const CardContainer = styled.div`
  height: 40vh;
  width: 40vw;
`;

export const ProductList = () => {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();

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

  const allproducts = useSelector((state) => state.product.products);

  const getselectedProducts = (cat) => {
    return allproducts.filter((item) => cat === item.parentCat);
  };

  const isFetchingProducts = useSelector((state) => state.product.isFetching);

  useEffect(() => {
    dispatch(getproducts());
    setproducts(getselectedProducts(cat));
  }, [dispatch, cat]);

  console.log("isFetchingProducts", isFetchingProducts);

  return (
    <Container>
      <Annoucement />
      <NavBar />
      <Title></Title>
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
      <Wrapper>
        {isFetchingProducts ? (
          <>
            <CardContainer>
              <Skeleton variant="rectangular" width={300} height={250} />
              <Skeleton
                variant="rectangular"
                style={{ marginTop: "40px" }}
                width={50}
                height={25}
              />
              <Skeleton
                variant="rectangular"
                style={{ marginTop: "40px" }}
                width={300}
                height={25}
              />
            </CardContainer>
            <CardContainer>
              <Skeleton variant="rectangular" width={300} height={250} />
              <Skeleton
                variant="rectangular"
                style={{ marginTop: "40px" }}
                width={50}
                height={25}
              />
              <Skeleton
                variant="rectangular"
                style={{ marginTop: "40px" }}
                width={300}
                height={25}
              />
            </CardContainer>
            <CardContainer>
              <Skeleton variant="rectangular" width={300} height={250} />
              <Skeleton
                variant="rectangular"
                style={{ marginTop: "40px" }}
                width={50}
                height={25}
              />
              <Skeleton
                variant="rectangular"
                style={{ marginTop: "40px" }}
                width={300}
                height={25}
              />
            </CardContainer>
          </>
        ) : (
          products.map((item, i) => (
            <ProductCard
              id={item._id}
              name={item.name}
              imageSrc={item.images}
              price={item.price}
            />
          ))
        )}
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};
