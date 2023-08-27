import Image from "../assets/sample-blog.jpg";

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[28rem] md:w-24 m-8 border-gray-200 border-2 rounded-md p-4">
      <img src={Image} className="w-[25rem] md:24"/>
      <div>Links</div>
      <div className="">
        <p className="font-semibold text-2xl">Coding Setup guide</p>
        <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. In a tempora nisi minima eum nemo dolorem rem voluptas fugiat eos.</p>
        <a href="#" className="underline text-[#00604]">Read this post</a>
      </div>
    </div>
  );
};

export default Blog;
