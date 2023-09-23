import React from "react";
import { Link } from "react-router-dom";
import sanityImageUrl from "../../utils/sanityImageUrl";

const News = ({data:{mainImage, title}}) => {
  console.log();
  return (
    <Link to={`/newsdetails/1`} className="flex flex-col items-center justify-center">
      <div className="border-2 boder-gray-200 shadow bg-[#f1f1f1] h-[18rem] p-2 mx-5 flex flex-col items-center justify-center" >
        <img src={sanityImageUrl(mainImage).width(1600).height(1300).url()} alt="News" className=" h-[12rem] w-auto" />
        <h3 className="text-xl font-semibold w-[11rem]">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default News;
