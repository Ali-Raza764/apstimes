import { Post, News } from "../components";

const Home = () => {
  return (
    <div className="w-full px-20 sm:px-2">
      {/* <div className="flex flex-wrap items-center justify-center p-4">
        <h2 className="text-xl w-full font-semibold mb-1">News</h2>
        <News />
        <News />
        <News />
      </div> */}
      {/* <div className="w-full h-2 bg-gray-200 mt-8 mb-3"></div> */}
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
