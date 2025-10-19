import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import RightAside from "../Component/RightAside";
import NewsDetailsCard from "../Component/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";
import Footer from "../Component/Footer";

const NewsDetaile = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetail = data.find((signleNews) => signleNews.id == id);
    setNews(newsDetail);
  }, [data, id]);

  //   console.log(news);

  return (
    <div>
      <header className=" py-3">
        <Header></Header>
      </header>
      <main className=" w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className=" col-span-9">
          <h2 className=" font-bold">Dragon News</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className=" col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default NewsDetaile;
