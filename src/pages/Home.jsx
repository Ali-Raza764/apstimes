import { Blog, News } from "../components";

const Home = () => {
  return (
    <div className="w-full px-20 sm:p-5">
      <div className="text-center text-4xl font-semibold mt-5 tracking-tight">
        Welcome to the APS Times
      </div>

      <div className="flex flex-wrap items-center justify-center p-4">
        <h2 className="text-xl w-full font-semibold mb-3">News</h2>
        <News />
        <News />
        <News />
      </div>
      <div className="w-full h-2 bg-gray-200 mt-8 mb-3"></div>
      <div className="flex flex-wrap items-center justify-center p-4">
        <p className="w-full font-semibold text-left text-xl">New posts</p>
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default Home;
