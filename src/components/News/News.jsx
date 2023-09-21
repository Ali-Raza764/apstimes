import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const News = ({data:{mainImage, title, body}}) => {
  return (
    <Link to={`/newsdetails/1`} className="">
      {/* <div className="border-2 boder-gray-200 shadow bg-[#f1f1f1] h-full p-6 mx-5">
        <img src={mainImage.asset.url} alt="" />
        <h3 className="text-xl font-semibold ">
          {title}
        </h3>
      </div> */}

      <div className="movie h-full w-[18rem]">
      <div>
        <p>2018</p>
      </div>

      <div>
        <img src={mainImage.asset.url} />
      </div>

      <div>
        <h3>{title}</h3>
      </div>
    </div>
    </Link>
  );
};

export default News;
