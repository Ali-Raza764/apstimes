import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client  from "../config/client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { getOnePost } from "../api/getData";


const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const PostDetails = () => {
  const {slug} = useParams()
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    if (slug) {
      getOnePost(slug)
      .then((data) =>{ 
        setPostData(data[0])
        console.log(data[0])
      })
    }
    
  }, [slug]);

  if (!postData) return <div>Loading...</div>;
  
  return (
    <div className="container px-11 py-8 sm:px-3">
      <div className="bg-gray-100 flex flex-col items-center justify-center p-8 sm:p-3 text-left">
        <img
          src={postData.mainImage.asset.url}
          alt="Image of post"
          className="h-[22rem] w-auto rounded-md sm:h-auto"
        />
        <h1 className="w-[full] text-3xl text-center font-semibold my-5">
         {postData.title}
        </h1>
        
        <BlockContent
          blocks={postData.body}
          projectId={'35c0tti1'}
          dataset={'production'}
        />

        <div className="w-full mt-3 flex justify-between items-center sm:flex-col">
          <div className="flex items-center">
            <img
              src={urlFor(postData.authorImage).width(200).url()}
              alt="author"
              className="w-8 h-8 rounded-full mr-2"
            />
            <h2 className="text-xl font-semibold">{postData.name}</h2>
          </div>
          <p><span className="cursive">Writtten On: </span>12 Nov 2023</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
