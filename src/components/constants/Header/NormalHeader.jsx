import React from "react";
import { Link } from "react-router-dom";

const NormalHeader = ({ loggedIn, authUser, navigate }) => {
  return (
    <div className="flex items-center justify-center sm:hidden">
      <div className="mx-6 hover:border-[#006435] hover:border-b-2 w-11 hover:text-[#006435] ">
        <Link to={"/"}>Blogs</Link>
      </div>

      <div className="mx-6 hover:border-[#006435] hover:border-b-2 hover:text-[#006435]">
        <Link to={"/"}>Members</Link>
      </div>

      <div className="mx-6 hover:border-[#006435] hover:border-b-2 hover:text-[#006435]">
        <Link to={"/create"}>Create</Link>
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
          <span>{authUser.email}</span>
        </div>
      ) : (
        <button
          className="text-white p-3 rounded-md bg-[#006435] hover:bg-gray-700 mr-3 sm:mr-1"
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
