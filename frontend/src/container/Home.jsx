import React, { useState, useRef, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

import { Sidebar, UserProfile } from "../components";
import Pins from "./Pins";
import logo from "../assets/logo.png";
import { client } from "../client";

const Home = () => {
  const [ toggleSidebar , setToggleSidebar] = useState(false);
  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>
      <div className="flex md:hidden flex-row">
        <HiMenuAlt1
          fontSize={40}
          className="cursor-pointer"
          onClick={() => setToggleSidebar(false)}
        />
        <Link to="/">
          <img src={logo} alt="logo" className="w-28" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
