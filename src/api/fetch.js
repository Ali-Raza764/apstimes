import { image1 } from "../assets";
import { image2 } from "../assets";
import { image3 } from "../assets";
import { image4 } from "../assets";

const fetch = async () => {
  return [
    {
      img: { src: image1 },
      title: "Tesla got Shocked",
      news: "tesla got a big hit by tax compinies ...",
    },
    {
      img: { src: image2 },
      title: "Meta got destroyed",
      news: "meta got a big hit by dollar compansation ...",
    },
    {
      img: { src: image3 },
      title: "Shopify got Banned",
      news: "Shopify got a big hit by crime...",
    },
    {
      img: { src: image4 },
      title: "Random Fake News",
      news: "This is a random fake news...",
    },
  ];
};
export default fetch;
