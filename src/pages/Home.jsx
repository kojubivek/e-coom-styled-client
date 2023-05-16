import React from "react";
import { NavBar } from "../components/NavBar";
import { Annoucement } from "../components/Annoucement";
import { Slider } from "../components/Slider";
import { Categories } from "../components/Categories";
import { Product } from "../components/Product";

export const Home = () => {
  return (
    <div>
      <Annoucement />
      <NavBar />
      <Slider />
      <Categories />
      <Product />
    </div>
  );
};
