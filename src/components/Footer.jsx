import React from "react";
import { styled } from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 40vh;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  display: flex;
  margin: 50px, 0px;
`;
const Desc = styled.p`
  font-size: 14px;
  margin: 25px;
`;
const SocialContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;
const SocialIcon = styled.h1`
  margin-top: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  margin-right: 28px;
  padding: 5px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;

  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  flex-wrap: wrap;
  ${mobile({ backgroundColor: "#f49d83" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          FootyBaller
          <SportsSoccerIcon />
        </Logo>
        <Desc>
          Footyballer E-Commerce: Your one-stop shop for high-quality football
          apparel, shoes, and jackets. Shop now and express your love for the
          game with our stylish merchandise.
        </Desc>
        <SocialContainer>
          <SocialIcon color="skyblue">
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon color="red">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="skyblue">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="red">
            <YouTubeIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>UseFull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Jersey</ListItem>
          <ListItem>Shorts</ListItem>
          <ListItem>Shoes</ListItem>
          <ListItem>Hoddie</ListItem>
          <ListItem>OrderTracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms and Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} /> 6b Connelly
          Street,Penshrust
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px" }} />
          045#######
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "10px" }} />
          footyBaller@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
      </Right>
    </Container>
  );
};
