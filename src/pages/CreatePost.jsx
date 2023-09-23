import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import client from "../config/client";

const CreatePost = ({ authUser }) => {
  const [image, setImage] = useState("");
  // const [editorState, setEditorState] = useState("");
  const navigate = useNavigate();

  const changeImage = async (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    const asset = await client.assets.upload("image", e.target.files[0]);
    setImage(asset);
    console.log(asset);
  };

  const uploadPost = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const postBody = e.target.postbody.value;

    // Define the new document object
    const newPost = {
      _type: "post",
      title: title,
      slug: {
        current: title.toLowerCase().replace(/\s+/g, "-"),
        _type: "slug",
      },
      mainImage: {
        asset: {
          _id: image._id, // Replace with the actual image asset ID
          _type: "reference",
        },
        author: {
          name: "Ali Raza Khalid",
          _id: "10902c64-879a-4842-bec9-9396d0146aa2",
        },
      },
      categories: [
        {
          title: category,
          _ref: "6b94e7a5-7c9b-4f5e-8e46-65410f2dd4f9", // Replace with the actual category reference ID
          _key: "6b94e7a5-7c9b-4f5e-8e46-65410f2dd4f9",
        },
      ],
      publishedAt: new Date().toISOString(),
      body: postBody,
    };

    // Create the new document in Sanity
    await client.create(newPost).then((res) => {
      console.log(`Post was created, document ID is ${res._id}`);
      // After successful creation, you can redirect or perform any other actions.
    });
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
        <form
          className="flex flex-col items-center justify-center text-center h-auto"
          onSubmit={uploadPost}
        >
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
          <div className="flex flex-col items-center jsutify-center bg-gray-400 my-5 rounded-xl p-3">
            <h3 className="text-2xl font-semibold mt-3">Select Your Image</h3>
            <input
              type="file"
              name="mainImage"
              id="mainImage"
              className="my-3"
              onChange={changeImage}
            />
            <img
              src={image.url}
              alt="selected Image"
              className="bg-gray-200 w-auto h-[10rem] mb-7"
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
