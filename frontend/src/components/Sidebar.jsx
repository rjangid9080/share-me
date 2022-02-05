import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FcOldTimeCamera } from "react-icons/fc";

import { categories } from "../utils/data";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-white hover:text-gray-100 transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 py-2 gap-3 text-white font-bold border-r-2 bg-gray-900 border-black transition-all duration-200 ease-in-out capitilize";

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) {
      closeToggle(false);
    }
  };

  return (
    <div className="flex flex-col justify-between bg-gray-700 h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <FcOldTimeCamera className="text-2xl mr-2" />
          <p className="gloriaFont text-white font-semibold">Share Me</p>
        </Link>
        <div className=" flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <AiFillHome className="text-white" />
            Home
          </NavLink>
          <h3 className="mt-2 px-5 text-white text-base 2xl:text-xl">
            Discover Categories
          </h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img
                src={category.image}
                className="w-8 h-8 text-white rounded-full shadow-sm"
                alt="catagory-image"
              />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          onClick={handleCloseSidebar}
          className="flex w-full p-4 border-t-2 mt-4 gap-2 items-center bg-gray-700 "
        >
          <img
            src={user.image}
            className="w-10 h-10 rounded-full"
            alt="user-profile"
          />
          <p className="text-white">{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
