import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import "./Header.css";
import {
  Bars3BottomRightIcon,
  BeakerIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" header-bg flex justify-between items-center top">
      <div className="container mx-auto md:flex text-white py-3 px-6 justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl cursor-pointer text-yellow-500 font-bold">
            Tasty haven
          </h1>
        </Link>

        <ul
          className={`md:flex absolute md:static  duration-500 header-bg px-4 pt-4 pb-8 rounded-sm ${
            open ? "right-0" : "-right-80"
          }`}
        >
          <li>
            {" "}
            <ActiveLink to="/home">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/meals">Meals</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/service">Service</ActiveLink>
          </li>{" "}
        </ul>
      </div>

      <div onClick={() => setOpen(!open)} className="md:hidden mr-6 ">
        <span>
          {open === true ? (
            <XMarkIcon className="h-8 w-8 text-white"></XMarkIcon>
          ) : (
            <Bars3BottomRightIcon className="h-8 w-8 text-white"></Bars3BottomRightIcon>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Header;
