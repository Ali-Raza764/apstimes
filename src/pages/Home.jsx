import { useEffect, useState } from "react";
import { Post, NewsCarousel } from "../components";
import sanityClient  from "../config/client";

const Home = () => {
  const [postData, setpostData] = useState([]);
  useEffect(() => {
    sanityClient 
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        },
        author
      }
    }`
      )
      .then((data) => {
        console.log(data);
        setpostData(data);
      })
      .catch(console.error);
  }, [setpostData]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="w-full px-20 sm:px-2">
      <div className="flex flex-wrap items-center justify-center p-4 pb-0 parent">
        <h2 className="text-xl w-full font-semibold mb-1">News</h2>
        <NewsCarousel />
      </div>

      <div className="flex flex-wrap items-center justify-center p-4">
        <p className="w-full font-semibold text-left text-xl mt-3">New posts</p>
        {postData.length === 0
          ? ""
          : postData.map((post, index)=><Post post={post} key={index}/>)}
      </div>
    </div>
  );
};

export default Home;
