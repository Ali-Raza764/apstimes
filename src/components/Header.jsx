import { Link, useNavigate } from "react-router-dom";
import { AccountAvatar, Logo } from "../assets";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  // const [active, setactive] = useState(true);
  const [showNav, setshowNav] = useState(false);

  const changeNav = () => {
    if (showNav == true) {
      setshowNav(false);
    } else {
      setshowNav(true);
    }
  };
  return (
    <div className="bg-white w-full h-max font-semibold border-b-2 border-gray-500 p-5 sm:px-2 sm:py-3 flex justify-between">
      <div className="flex items-center justify-center">
        <img
          src={Logo}
          alt="APS"
          className="rounded-full h-[3rem] cursor-pointer"
          onClick={() => {
            navigate("/");
            console.log("clicked");
          }}
        />

        <div className="ml-5 sm:ml-2 text-2xl text-[#006435] flex">
          <p className="mr-2 sm:mr-1">The</p>{" "}
          <p className="font-bold">APS Times</p>
        </div>
      </div>

      <div className="flex items-center justify-center sm:hidden">
        <div className="mx-6 hover:border-[#006435] hover:border-b-2 w-11 hover:text-[#006435] ">
          <Link to={"/"}>Blogs</Link>
        </div>

        <div className="mx-6 hover:border-[#006435] hover:border-b-2 hover:text-[#006435]">
          <Link to={"/"}>Members</Link>
        </div>

        {loggedIn ? (
          <div className="flex">
            <img
              src={AccountAvatar}
              alt="Account"
              className="h-[3rem] rounded-full"
              onClick={(e) => {
                e.preventDefault();
              }}
            />
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
                <div className="flex items-center justify-center">
                  <img
                    src={AccountAvatar}
                    alt="avatar"
                    className="h-[3rem] rounded-full"
                  />
                  <div className="text-2xl font-sans mx-5">Ali Raza Khalid</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
