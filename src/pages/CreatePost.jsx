import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import client from '../config/client'

const CreatePost = ({ authUser }) => {
  const [image, setImage] = useState("");
  const navigate = useNavigate()

  const changeImage = async(e) => {
    setImage(e.target.files[0]);
    e.preventDefault();
    console.log(e.target.files[0]);
    const asset = await client.assets.upload('image', e.target.files[0])
    console.log(asset.url);
  };

  if (!authUser) {
    return (
      <div className="p-1 w-full text-center">
        <h1 className="text-left mx-11 mt-11 text-4xl font-sans font-bold ">
          <span className="text-[#006435]">Login </span>To Create Posts!
        </h1>
        <button
          className="text-white p-3 rounded-md bg-[#006435] hover:bg-gray-700 mt-11"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    );
  }
  return (
    <div className="h-full text-center w-full p-10 sm:p-6">
      <div className="bg-gray-300 h-max p-4 rounded-md flex items-center justify-center ">
        <form className="flex flex-col items-center justify-center text-center h-auto ">
          <input
            type="text"
            className="m-6 p-2 rounded-md focus:outline-none sm:mx-2"
            placeholder="Title of your post"
            name="title"
            id="title"
          />

          <input
            type="text"
            className="mx-6 p-2 rounded-md focus:outline-none sm:mx-2"
            placeholder="Select category"
            name="category"
            id="category"
          />
          <select
            name="category"
            id="category"
            className="m-6 w-[12.5rem] p-3 bg-white"
          >
            <option value="other">Gaming</option>
            <option value="other">Coding</option>
            <option value="other">Administration</option>
            <option value="other">Exams</option>
            <option value="other">Party</option>
            <option value="other">Sports</option>
            <option value="other">Other</option>
          </select>
          <div>
            <img src={image} alt="" />
            <input
              type="file"
              name="mainImage"
              id="mainImage"
              className="m-6"
              onChange={changeImage}
            />
          </div>

          <textarea
            name="postbody"
            id=""
            cols="30"
            rows="10"
            className="mb-6 w-[15rem]"
          ></textarea>

          <button
            className="text-white p-3 rounded-md bg-[#006435] hover:bg-gray-700"
            type="submit"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
