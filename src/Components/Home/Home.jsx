import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Home.css";
import Meals from "../Meals/Meals";

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl text-white">This is home page </h1>
    </div>
  );
};

export default Home;
