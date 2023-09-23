import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../config/firebase";
import { AccountAvatar } from "../assets";
import { useNavigate } from "react-router-dom";

const AuthDetails = ({ authUser }) => {
  const navigate = useNavigate();
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <div className="flex flex-col items-center justify-center">

          <img
            src={AccountAvatar}
            alt="userImage"
            className="rounded-full h-[8rem]"
          />

          <div className="text-center">
            <h1 className="text-3xl font-">Ali Raza khalid</h1>
            <p>{`Signed In as ${authUser.email}`}</p>
            <h2>
              Class: <span>1st Year C.S</span>
            </h2>
            <p>
              Role: <span>Web Designer</span>
            </p>
          </div>

          <button
            className="text-white p-3 rounded-md bg-[#006435] hover:bg-gray-700 m-3"
            onClick={() => {
              userSignOut;
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="w-full h-full text-center">
          <h3 className="text-4xl font-semibold m-5">Signed Out</h3>
          <button
            className="text-white p-5 rounded-md bg-[#006435] hover:bg-gray-700 m-3 text-xl"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthDetails;
