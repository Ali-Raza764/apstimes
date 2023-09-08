import { Link } from "react-router-dom";
import SamplePostImage from "../assets/sample.jpg";

const Post = () => {
  return (
    <Link to={`/postdetails/1`}>

      <div className="flex flex-col items-center justify-center w-[20rem] sm:w-[90vw] m-8 sm:mb-8 sm:mt:1 sm:mx-0 border-gray-200 shadow border-2 rounded-md p-4">

        <img src={SamplePostImage} className="w-[25rem]" />
        <h2 className="w-full font-semibold text-2xl my-2 text-left">Coding Setup guide</h2>
        <p className="w-full">Lorem ipsum dolor sit amet consect, veniam voluptatem? Nulla.</p>

          <div className="w-full mt-3 flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={SamplePostImage}
                alt="author"
                className="w-8 h-8 rounded-full mr-2"
              />
              <h2>Ali Raza</h2>
            </div>
            <p>12 Nov 2023</p>
          </div>

      </div>

    </Link>
  );
};

export default Post;
