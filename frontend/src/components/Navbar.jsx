import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd, IoMdSearch, IoMdClose } from "react-icons/io";

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex shadow-sm justify-start items-center w-full px-2 rounded-md  bg-white border-none outline-none focus-within:bg-blue-50">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate("/search")}
          className="p-2 w-full bg-white outline-none focus-within:bg-blue-50"
        />
        {searchTerm && (
          <IoMdClose
            fontSize={21}
            onClick={() => setSearchTerm("")}
            className="cursor-pointer"
          />
        )}
      </div>
      <div className="flex gap-4">
        <Link to={`user-profile/${user?._id}`} className="hidden md:block">
          <img
            src={user.image}
            className="w-10 rounded-full shadow-md"
            alt="user-image"
          />
        </Link>
        <Link
          to="/create-pin"
          className="w-10 shadow-md rounded-lg flex justify-center items-center border-2 border-gray-500 text-black"
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
