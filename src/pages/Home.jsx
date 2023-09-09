import { Post, News } from "../components";
import fetch from "../api/fetch";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const [newsData, setNewsData] = useState([]);

  const Set = async () => {
    let data = await fetch();
    setNewsData(data);
  };

  useEffect(() => {
    Set();
  }, []);
  console.log(newsData);

  return (
    <div className="w-full px-20 sm:px-2">
      <div className="flex flex-wrap items-center justify-center p-4 parent">
        <h2 className="text-xl w-full font-semibold mb-1">News</h2>
        {newsData.length === 0 ? (
          "tjis is data"
        ) : (
          <Carousel
            showArrows={true}
            swipeable={true}
            // autoPlay={true}
            // infiniteLoop={true}
            className="w-[16rem]"
          >
            {newsData.map((data, index) => {
              return <News data={data} key={data.title} />;
            })}
          </Carousel>
        )}
      </div>

      <div className="w-full h-2 bg-gray-200 mt-8 mb-3"></div>
      <div className="flex flex-wrap items-center justify-center p-4">
        <p className="w-full font-semibold text-left text-xl">New posts</p>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Home;
