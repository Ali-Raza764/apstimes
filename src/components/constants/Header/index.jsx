import { useNavigate } from "react-router-dom";
import { AccountAvatar, Logo } from "../../../assets";
import MobileHeader from "./MobileHeader";
import NormalHeader from "./NormalHeader";

const Header = ({ loggedIn, authUser }) => {
  const navigate = useNavigate();

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
          <p className="mr-2 sm:mr-1">The</p>
          <p className="font-bold">APS Times</p>
        </div>
      </div>

      <NormalHeader
        loggedIn={loggedIn}
        authUser={authUser}
        navigate={navigate}
        AccountAvatar={AccountAvatar}
      />
      <MobileHeader
        loggedIn={loggedIn}
        authUser={authUser}
        navigate={navigate}
        AccountAvatar={AccountAvatar}
      />
    </div>
  );
};

export default Header;
