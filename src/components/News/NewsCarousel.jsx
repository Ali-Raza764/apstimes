import News from "./News";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import "./styles.css";
import sanityClient from '../../config/client'

const NewsCarousel = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    sanityClient 
      .fetch(
        `*[_type == "news"]{
        title,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => {
        console.log(data);
        setNewsData(data);
      })
      .catch(console.error);
  }, [setNewsData]);

  return (
    <div className="parent w-full h-[90%] flex items-center justify-center">
      {newsData.length === 0 ? (
          <p>loading</p>
        ) : (
          <Carousel
            showArrows={false}
            showThumbs = {false}
            showDots={false}
            swipeable={true}
            autoPlay={true}
            infiniteLoop={true}
            className="w-[18rem]"
          >
            {newsData.map((data, index) => {
              return <News data={data} key={data.title} />;
            })}
          </Carousel>
        )}
    </div>
  );
};

export default NewsCarousel;
