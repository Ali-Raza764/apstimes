import { NewsCarousel } from "../components";
import Posts from "../components/Post/Posts";

const Home = () => {

  return (
    <div className="w-full px-20 sm:px-2">
      <div className="flex flex-wrap items-center justify-center p-4 pb-0 parent">
        <h2 className="text-xl w-full font-semibold mb-1">News</h2>
        <NewsCarousel />
      </div>

      <div className="flex flex-wrap items-center justify-center p-4">
        <p className="w-full font-semibold text-left text-xl mt-3">New posts</p>
        <Posts />
      </div>
    </div>
  );
};

export default Home;
