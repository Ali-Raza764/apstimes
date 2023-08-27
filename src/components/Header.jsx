import { useNavigate } from "react-router-dom";
import Icon from "../assets/aps.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full h-[5rem] sticky top-0 font-semibold border-b-2 border-gray-500 p-5 flex justify-between">
      <div className="flex items-center justify-center">
        <img
          src={Icon}
          alt="YJC"
          className="rounded-full h-[4rem]"
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
        <button
          className="text-white p-3 rounded-md bg-[#006435] hover:bg-gray-700 mr-3"
          onClick={() => {
            navigate("/login");
            console.log("clicked");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
