import { Link } from "react-router-dom";
import Image from "../assets/sample-blog.jpg";

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[20rem] m-8 border-gray-200 shadow border-2 rounded-md p-4">
      <img src={Image} className="w-[25rem]"/>
      <div className="">
        <h2 className="font-semibold text-2xl my-2">Coding Setup guide</h2>
        <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. In a tempora nisi minima eum nemo dolorem rem voluptas fugiat eos.</p>
        <Link to="/" className="underline text-[#00604] italic">Read this post</Link>
      </div>
    </div>
  );
};

export default Blog;
