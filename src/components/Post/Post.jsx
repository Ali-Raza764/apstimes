import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Post = ({post: {mainImage, slug, title}}) => {
  return (
    <Link to={`/postdetails/${slug?.current}`}>

      <div className="flex flex-col items-center justify-center w-[20rem] sm:w-[90vw] m-8 mt-2 sm:mb-8 sm:mt:1 sm:mx-0 border-gray-200 shadow border-2 rounded-md p-4">

        <LazyLoadImage effect="blur" src={mainImage?.asset?.url} className="w-[25rem] data-image relative h-[13rem]" />
        <h2 className="w-full font-semibold text-2xl my-2 text-left">{title}</h2>    
      </div>

    </Link>
  );
};

export default Post;
