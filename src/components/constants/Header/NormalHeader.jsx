import React from "react";
import { NavLink } from "react-router-dom";

const NormalHeader = ({ loggedIn, authUser, navigate, AccountAvatar }) => {
  const normalstyles =
    "mx-6 md:mx-3 hover:border-[#006435] hover:border-b-2 w-11 hover:text-[#006435] ";

  return (
    <div className="flex items-center justify-center sm:hidden">
      <div className="px-2" id="navbar">
        <NavLink to={"/"} className={normalstyles}>
          Home
        </NavLink>
        <NavLink to={"/blogs"} className={normalstyles}>
          Blogs
        </NavLink>
        <NavLink to={"/members"} className={normalstyles}>
          Members
        </NavLink>
        <NavLink to={"/create"} className={normalstyles}>
          Create
        </NavLink>
      </div>

      {loggedIn ? (
        <div className="flex flex-col">
          <img
            src={AccountAvatar}
            alt="Account"
            className="h-[3rem] rounded-full"
            onClick={(e) => {
              e.preventDefault();
            }}
          />
          <span>{authUser?.email}</span>
        </div>
      ) : (
        <button
          className="text-white p-3 rounded-md bg-[#006435] hover:bg-gray-700 mr-3 md:mr-1"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default NormalHeader;
