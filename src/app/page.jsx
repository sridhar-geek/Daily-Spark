"use client";

import { useState, useEffect } from "react";
import { IoMdTrendingUp } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
// Imports from another files
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import axios from "axios";
import NewsCard from "@/Components/NewsCard";

export default function Home() {
  const dummyData = [
    {
      by: "prans23",
      id: 26248134,
      score: 13,
      time: 1614158190,
      title: "Nim versions 1.4.4 and 1.2.10 released",
      type: "story",
      url: "https://nim-lang.org/blog/2021/02/23/versions-144-and-1210-released.html",
    },
    {
      by: "pansa2",
      id: 26245933,
      score: 15,
      time: 1614133964,
      title: "Python Developers Survey 2020 Results",
      type: "story",
      url: "https://www.jetbrains.com/lp/python-developers-survey-2020/",
    },
  ];

  //  News Categories
  const newsCategories = [
    { id: 1, name: "Top", url: "top-news", icon: <FaRegNewspaper /> },
    { id: 2, name: "Best", url: "best-news", icon: <AiOutlineGlobal /> },
    { id: 3, name: "Trending", url: "latest-news", icon: <IoMdTrendingUp /> },
  ];

  const [category, setCategory] = useState("top-news");
  const [newsData, setNewsData] = useState()

  useEffect(() => {
    const url = "http://localhost:4000/api/v1/news/";
    const getNews = async () => {
     const response = await axios.get(url + category);
     setNewsData(response.data)
    //  return response.data
    };
    // getNews()
  }, [category]);
  return (
    <>
      <Header />
      <main className="mx-4 flex flex-col gap-4 md:grid md:grid-cols-3 lg:mx-8 my-10">
        {/* Categories */}
        <aside className=" col-span-1 flex flex-row justify-center gap-3 md:flex-col ">
          {newsCategories.map((news) => (
            <div
              key={news.id}
              onClick={() => setCategory(news.url)}
              className={`${
                news.url === category ? "bg-textColor" : "bg-gray-200"
              } rounded-lg px-4 py-2 flex-nowrap max-w-40 cursor-pointer`}
            >
              <button className="text-nowrap font-medium flex gap-3 justify-center items-center ">
                <>{news.icon}</>
                {news.name}{" "}
              </button>
            </div>
          ))}
        </aside>
        {/*  News Articles */}
        <section className=" col-span-2">
          <h1 className="font-bold text-center text-3xl md:text-5xl">
            {category} Stories
          </h1>
          {newsData?.map((dummy,i) => (
            <NewsCard key={i} dummy={dummy} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
