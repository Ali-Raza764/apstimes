import React from "react";
import { Link } from "react-router-dom";
// import SampleNewsimage from "../assets/news-1.png";

const News = ({data:{img, title, news}}) => {
  return (
    <Link to={`/newsdetails/1`}>
      <div className="border-2 boder-gray-200 shadow w-[16rem] text-left bg-[#f1f1f1] h-[90%] p-6">
        <img src={img.src} alt="" />
        <h3 className="text-xl font-semibold ">
          {title}
        </h3>
        <p className="mt-1 mb-4">
          {news}
        </p>
      </div>
    </Link>
  );
};

export default News;
