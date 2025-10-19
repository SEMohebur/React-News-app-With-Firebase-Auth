import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Component/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(data);

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const filterData = data.filter((news) => {
        return news.others.is_today_pick == true;
      });
      setCategoryNews(filterData);
    } else {
      const filterData = data.filter((news) => {
        return news.category_id == id;
      });
      setCategoryNews(filterData);
    }
  }, [id, data]);

  // console.log(categoryNews);

  return (
    <div>
      <h2 className=" font-semibold mb-5">
        Total (<span className=" text-green-700">{categoryNews.length}</span>)
        news found
      </h2>

      <div className=" px-5">
        {categoryNews.map((news, index) => (
          <NewsCard key={index} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
