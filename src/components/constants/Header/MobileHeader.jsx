import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileHeader = ({ loggedIn, authUser, navigate, AccountAvatar }) => {
  const [showNav, setshowNav] = useState(false);

  const changeNav = () => {
    if (showNav == true) {
      setshowNav(false);
    } else {
      setshowNav(true);
    }
  };
  return (
    <div className="hidden sm:text-center sm:flex items-center justify-center">
      <span className="border-2 border-gray-500 rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center shadow p-2">
        <button
          onClick={() => {
            changeNav();
          }}
          className="text-2xl w-auto outline-none "
        >
          &#9776;
        </button>
      </span>

      <div
        className={
          showNav
            ? "flex flex-col bg-gray-900 h-full w-full absolute top-0 right-0 left-0 bottom-0 text-white header ease-in transition-all"
            : "hidden right-[-500rem]"
        }
      >
        <div className="w-full flex items-end flex-col h-11 pt-5 px-3 text-3xl">
          <span
            className="border-2 border-white rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center shadow p-2"
            onClick={() => {
              changeNav();
            }}
          >
            <button className="text-2xl outline-none ">&#9932;</button>
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex p-4 justify-center border-b-2 border-white w-[90%]">
            {loggedIn ? (
              <div
                className="flex items-center justify-center"
                onClick={() => {
                  navigate("/admin");
                  setshowNav(false);
                }}
              >
                <img
                  src={AccountAvatar}
                  alt="avatar"
                  className="h-[3rem] rounded-full"
                />
                <div className="text-2xl font-sans mx-3">{authUser.email}</div>
              </div>
            ) : (
              <button
                className="text-white p-3 rounded-md bg-[#006435] hover:bg-gray-700 mr-3 sm:mr-1"
                onClick={() => {
                  navigate("/login");
                  setshowNav(false);
                }}
              >
                Login
              </button>
            )}
          </div>

          <div className="flex flex-col items-center justify-center text-2xl w-full">
            <div className="mt-8 mb-4 hover:border-[#006435] border-b-2 border-white w-[90%] py-3">
              <Link to={"/"} className="hover:text-[#006435] ">
                Blogs
              </Link>
            </div>

            <div className="my-4 hover:border-[#006435] border-b-2 border-white w-[90%] py-3">
              <Link to={"/"} className="hover:text-[#006435]">
                Members
              </Link>
            </div>

            <div className="my-4 hover:border-[#006435] border-b-2 border-white w-[90%] py-3">
              <Link to={"/create"} className="hover:text-[#006435]">
                Create
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
