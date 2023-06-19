import React from "react";
import { Annoucement } from "../components/Annoucement";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { AdminDash } from "../components/AdminDash";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useSelector } from "react-redux";
import EastIcon from "@mui/icons-material/East";
import PersonIcon from "@mui/icons-material/Person";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: center;
  margin-top: 87px;
  align-items: center;
`;
export const Success = () => {
  const getUser = useSelector((state) => state.user.currentUser);
  return (
    <div>
      {" "}
      <Annoucement />
      <NavBar />
      <Wrapper>
        <h1>
          <CheckCircleOutlineIcon fontSize="large" sx={{ color: "green" }} />
          Order SuccessFull !!!
        </h1>
        <div style={{ margin: "20px" }}>
          <Link to={`/dashboard/${getUser._id}`}>
            <h3>
              Go to DashBoard {"     "}
              <EastIcon fontSize="large" sx={{ color: "firebrick" }} />{" "}
              <PersonIcon fontSize="large" sx={{ color: "indianred" }} />
            </h3>
          </Link>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};
