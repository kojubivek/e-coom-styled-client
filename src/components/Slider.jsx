import React, { useEffect, useState } from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { styled } from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { getcat } from "../redux/category/categoryActions";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 85px;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;

  border-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #db9f9f;
  top: 0;
  bottom: 0;
  left: ${(porps) => porps.direction === "left" && "10px"};
  right: ${(porps) => porps.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
  :hover {
    background-color: saddlebrown;
    border-radius: 50px;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideindex * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  margin-top: 30px;

  align-items: center;
  display: flex;
  background-color: ${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin-top: 150px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;
const Image = styled.img`
  width: 100%;

  border-radius: 25px;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Slider = () => {
  const dispatch = useDispatch();
  const [slideIndex, setSlideIndex] = useState(0);
  const catItems = useSelector((state) => state.category.categories);
  useEffect(() => {
    dispatch(getcat());
  }, [dispatch]);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowCircleLeftOutlinedIcon />
        </Arrow>
        <Wrapper slideindex={slideIndex}>
          {catItems.map((item, i) => (
            <Slide key={i} bg="white">
              <ImageContainer>
                <Image src={item.image} alt={item.name} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.name}</Title>
                <Link to={`/products/${item._id}`}>
                  {" "}
                  <Button>Shop Now</Button>
                </Link>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowCircleRightOutlinedIcon />
        </Arrow>
      </Container>
    </div>
  );
};
