import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-gray-300 p-8 mt-[9rem] rounded-md">
        <h1 className="text-4xl font-bold">Error 404</h1>
        <h2 className="text-xl font-semibold mt-2">Page Not Found</h2>
        <Link to={'/'}>
          <button className="text-white p-3 mt-5 rounded-md bg-[#006435] hover:bg-gray-700">
            HomePage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
