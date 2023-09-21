import React, { useState } from "react";
import { Link } from "react-router-dom";

const NormalHeader = ({ loggedIn, authUser, navigate }) => {
  const [active, setActive] = useState(false);
  const activestyles = "active mx-6 md:mx-3 hover:border-[#006435] hover:border-b-2 w-11 hover:text-[#006435] "
  const normalstyles = "mx-6 md:mx-3 hover:border-[#006435] hover:border-b-2 w-11 hover:text-[#006435] "

  return (
    <div className="flex items-center justify-center sm:hidden">
      <div className={active?activestyles:normalstyles} onClick={()=>{
        setActive(true)
      }}>
        <Link to={"/"}>Home</Link>
      </div>

      <div className={active?activestyles:normalstyles}>
        <Link to={"/blogs"}>Blogs</Link>
      </div>

      <div className={active?activestyles:normalstyles}>
        <Link to={"/members"}>Members</Link>
      </div>

      <div className={active?activestyles:normalstyles}>
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
