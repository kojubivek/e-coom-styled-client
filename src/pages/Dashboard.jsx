import React from "react";
import { Annoucement } from "../components/Annoucement";
import { NavBar } from "../components/NavBar";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { Drawer, Toolbar } from "@mui/material";
import { AdminDash } from "../components/AdminDash";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;

  margin-top: 87px;
`;
export const Dashboard = () => {
  return (
    <div>
      {" "}
      <Annoucement />
      <NavBar />
      <Wrapper>
        <AdminDash />
      </Wrapper>
      <Footer />
    </div>
  );
};
