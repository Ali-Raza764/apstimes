import React from "react";
import { SamplePostImage } from "../assets";

const PostDetails = () => {
  return (
    <div className="container px-11 py-8 sm:px-3">
      <div className="bg-gray-100 flex flex-col items-center justify-center p-8 sm:p-3 text-left">
        <img
          src={SamplePostImage}
          alt="Image of post"
          className="h-[22rem] w-auto rounded-md sm:h-auto"
        />
        <h1 className="w-[full] text-3xl text-center font-semibold my-5">
          Coding Setup Guide
        </h1>
        <div className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          deleniti nobis consequatur molestias commodi hic beatae quis error at
          facere excepturi, voluptatibus, modi eos consectetur provident sequi
          ipsam, nemo a ex repellendus. Placeat atque quis voluptatum, sed quia
          libero earum asperiores. Eius sed nostrum reprehenderit vitae facilis
          debitis quidem laboriosam nobis quis perspiciatis deleniti accusantium
          voluptatem delectus, illum a obcaecati dolor error accusamus eligendi
          nisi commodi praesentium cum. Numquam aliquam consequatur aut
          assumenda laborum placeat corrupti consectetur porro ullam beatae
          molestias, corporis, labore cumque eos officia, ea molestiae eius ut!
          Asperiores, accusamus nesciunt. Qui iste aliquid velit recusandae
          molestias debitis!
        </div>

        <div className="w-full mt-3 flex justify-between items-center sm:flex-col">
          <div className="flex items-center">
            <img
              src={SamplePostImage}
              alt="author"
              className="w-8 h-8 rounded-full mr-2"
            />
            <h2 className="text-xl font-semibold">Ali Raza</h2>
          </div>
          <p><span className="cursive">Writtten On: </span>12 Nov 2023</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
