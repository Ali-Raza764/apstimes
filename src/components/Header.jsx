import { useNavigate } from "react-router-dom";
import {AccountAvatar, Logo} from '../assets'
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="bg-white w-full h-max font-semibold border-b-2 border-gray-500 p-5 flex justify-between">

      <div className="flex items-center justify-center">
        <img
          src={Logo}
          alt="YJC"
          className="rounded-full h-[4rem] sm:h-[2rem]"
          onClick={() => {
            navigate("/");
            console.log("clicked");
          }}
        />

        <div className="ml-5 text-2xl text-[#006435] flex">
          <p className="mr-2">The</p> <p className="font-bold">APS Times</p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {loggedIn ? (
          <div className="flex">
            <img src={AccountAvatar} alt="Account" className="h-[3rem] rounded-full" onClick={(e)=>{e.preventDefault()}}/>
          </div>
        ) : (
          <button
            className="text-white p-3 rounded-md bg-[#006435] hover:bg-gray-700 mr-3"
            onClick={() => {
              navigate("/login");
              console.log("clicked");
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
