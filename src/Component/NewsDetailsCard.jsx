import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details } = news;

  return (
    <div className=" border border-gray-100 p-3 rounded-md space-y-3 mt-3">
      <img className=" rounded-md" src={image_url} alt="" />
      <h2 className=" font-bold text-accent">{title}</h2>
      <p className=" text-accent">{details}</p>
      <Link className=" btn btn-primary" to={`/category/${news.category_id}`}>
        Beck to category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
