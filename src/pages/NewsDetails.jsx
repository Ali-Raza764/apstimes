import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneNews } from "../api/getData";

const NewsDetails = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getOneNews(slug).then((data) => {
      setData(data);
    });
  }, [setData]);

  if (!data) return <div>Loading...</div>;
  return <div>NewsDetailsPage</div>;
};

export default NewsDetails;
