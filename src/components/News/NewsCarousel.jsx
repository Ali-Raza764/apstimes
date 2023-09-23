import News from "./News";
import { useEffect, useState } from "react";
import "./styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getAllNews } from "../../api/getData";

const NewsCarousel = () => {
  const [newsData, setNewsData] = useState([]);
  const dummy = [1,1,1,1,12,42,12,4,512,4]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 520,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 868,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: false },
      },
    ],
    arrows: true,
    centerPadding: "14",
  };

  useEffect(() => {
    getAllNews()
      .then((data) => {
        console.log(data);
        setNewsData(data);
      })
      .catch(console.error);
  }, [setNewsData]);

  return (
    <div className="container flex items-center justify-center">
      {newsData.length === 0 ? (
        <div className="container">
          <h2> Shorts </h2>
          <Slider {...settings} className="text-center">
            <div className="w-11 h-11 bg-white">Item</div>
            <div className="w-11 h-11 bg-white">Item</div>
            <div className="w-11 h-11 bg-white">Item</div>
            <div className="w-11 h-11 bg-white">Item</div>
            <div className="w-11 h-11 bg-white">Item</div>
          </Slider>
        </div>
      ) : (
        <Slider {...settings} className="text-center w-full">
          {newsData.map((data) => {
            return (
              <News data={data} key={data.title} />
            )
            
          })}
        </Slider>
      )}
    </div>
  );
};

export default NewsCarousel;
