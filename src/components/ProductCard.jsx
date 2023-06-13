import React from "react";
import { styled } from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartRedux";
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 71%;
  top: 0;
  left: 0;
  background-color: #00000079;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  position: absolute;

  ${Image}:hover & {
    opacity: 1;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  cursor: pointer;
  &:hover {
    ${Info} {
      opacity: 1;
    }
  }
`;

const ProductInfo = styled.div`
  padding: 16px;
`;

const Price = styled.p`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 600;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-attachment: #e9e8f9;
    transform: scale(1.1);
  }
`;
const AddToCartButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 8px 0;
  background-color: #0088cc;
  color: #fff;
  border: none;
  border-radius: 0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #006699;
  }
`;
const Title = styled.h4`
  margin-top: 40px;
`;

export const ProductCard = ({ id, imageSrc, name, price }) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addProduct({ id, imageSrc, name, price, quantity: 1 }));
  };
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={imageSrc} alt="Product" />
        <Info>
          <Icon>
            <Link to={`/product/${id}`}>
              <SearchIcon />
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderIcon />
          </Icon>
        </Info>
      </ImageContainer>

      <ProductInfo>
        <Title>{name}</Title>
        <Price>${price}</Price>
        <AddToCartButton
          Title="Add to Cart"
          onClick={() => onAddToCart(id, name, price)}
        >
          <ShoppingCartIcon />
        </AddToCartButton>
      </ProductInfo>
    </CardContainer>
  );
};
