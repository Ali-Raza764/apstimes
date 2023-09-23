import React, { useEffect, useState } from "react";
import { getAllposts } from "../../api/getData";
import Post from "./Post";

const Posts = () => {
  const [postData, setpostData] = useState([]);
  useEffect(() => {
    getAllposts()
      .then((data) => {
        setpostData(data);
      })
      .catch(console.error);
  }, [setpostData]);

  return (
    <div className="flex items-center justify-center flex-wrap">
      {postData.length === 0
        ? ""
        : postData.map((post, index) => <Post post={post} key={index} />)}
    </div>
  );
};

export default Posts;
