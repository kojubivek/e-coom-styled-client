import {
  CalendarTodayOutlined,
  EmailOutlined,
  LocationCityOutlined,
  PermIdentityOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const UserInfoContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-top: 200px;
`;

const UserInfoItem = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;
export const UserInfo = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <UserInfoContainer>
      <UserInfoItem>
        <Label>Name:</Label> {user.firstname} {user.middlename} {user.lastname}
      </UserInfoItem>

      <UserInfoItem>
        <Label>Email:</Label> {user.email}
      </UserInfoItem>
      <UserInfoItem>
        <Label>Username:</Label> {user.username}
      </UserInfoItem>
    </UserInfoContainer>
  );
};
