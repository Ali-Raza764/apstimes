import React from "react";
import { Link } from "react-router-dom";
import { SampleBlog } from "../assets";

const News = () => {
  return <div className="border-2 boder-gray-200 shadow m-8 p-4 w-[15rem] text-left bg-[#f1f1f1]">
    <img src={SampleBlog} alt="" />
    <h3 className="text-2xl font-semibold ">Aps times got banned</h3>
    <p className="mt-1 mb-4">Aps times struggling from a long time got no support...</p>
    <Link className="underline italic text-[#00604] text-[#006435]">Read more about this</Link>
  </div>;
};

export default News;
