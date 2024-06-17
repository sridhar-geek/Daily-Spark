"use client";

import { useState, useEffect, Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { IoMdTrendingUp } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
// Imports from another files
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import axios from "axios";
import NewsCard from "@/Components/NewsCard";
import Loading from "./loading";

export default function Home() {
  //  News Categories
  const newsCategories = [
    { id: 1, name: "Top", url: "top-news", icon: <FaRegNewspaper /> },
    { id: 2, name: "Best", url: "best-news", icon: <AiOutlineGlobal /> },
    { id: 3, name: "Trending", url: "latest-news", icon: <IoMdTrendingUp /> },
  ];

  const [category, setCategory] = useState("top-news");
  const [pageCount, setPageCount] = useState(1);

  // Sending request to server and saving that data in useState hook (newsData)
  const { data, isError, isLoading, error, isFetching } = useQuery({
    queryKey: [category, pageCount],
    queryFn: () =>
      axios.get(
        `https://dailysparks-server.onrender.com/api/v1/news/${category}?page=${pageCount}?limit=10`
      ),
  });


  // Get max No.of pages possible
  let maxPages = data?.data.count / 10 - 1;
  // Handling Page count
  const increaseCount = () => {
    if (pageCount < maxPages) setPageCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    if (pageCount > 1) setPageCount((prev) => prev - 1);
  };

  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Page */}
      <main className="mx-4 flex flex-col justify-start gap-4 md:grid md:grid-cols-3 lg:mx-24 my-10">
        {/* Categories */}
        <aside className=" col-span-1 flex flex-row justify-center gap-3 md:flex-col overflow-x-auto ">
          {newsCategories.map((news) => (
            <div
              key={news.id}
              onClick={() => setCategory(news.url)}
              className={`${
                news.url === category ? "bg-textColor" : "bg-gray-200"
              } categoryBtn`}
            >
              <button className="text-nowrap font-medium flex gap-3 justify-center items-center ">
                <>{news.icon}</>
                {news.name}{" "}
              </button>
            </div>
          ))}
          {/* <button className="categoryBtn">Dummy 1</button>
          <button className="categoryBtn">Dummy 2</button>
          <button className="categoryBtn">Dummy 3</button> */}
        </aside>
        {/*  News Articles */}
        <section className=" col-span-2">
          <h1 className="font-bold text-center text-3xl md:text-5xl underline decoration-double decoration-primary">
            {category} Stories
          </h1>
          {/* Shows loading animation while data fetching */}
          {isLoading ? (
            <Loading />
          ) : isError ? <h3 className="text-3xl text-center">{error.message}</h3> : (
            <>
              {data?.data.data.map((article, i) => (
                <NewsCard key={i} article={article} />
              ))}{" "}
            </>
          )}
          <aside className="flex justify-center items-center gap-5">
            <button
              className={`navBtn`}
              disabled={pageCount < 2}
              onClick={decreaseCount}
            >
              Prev
            </button>
            <h3>{pageCount}</h3>
            <button
              className="navBtn"
              disabled={pageCount > maxPages}
              onClick={increaseCount}
            >
              Next
            </button>
          </aside>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
