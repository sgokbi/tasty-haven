import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "./First.css";
import Meals from "../Meals/Meals";

const First = () => {
  return (
    <div className="home-bg">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default First;
