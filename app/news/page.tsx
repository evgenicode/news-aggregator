import React from "react";

import mockResponse from "./mockResopnse.json";
import Link from "next/link";

// Production
// const API_KEY = process.env.API_KEY;
// const gnewsapiTrending = `https://gnews.io/api/v4/top-headlines?category=general&apikey=${API_KEY}`;
// const apiUpdateRate = 60 * 60 * 24; // 24 hours

// const fetchTrending = async () => {
//   const response = await fetch(`${gnewsapiTrending}`, {
//     next: {
//       revalidate: apiUpdateRate,
//     },
//   });
//   const trendingNews = await response.json();
//   return trendingNews;
// };

// Dvelopment
const fetchTrending = async () => {
  return mockResponse;
};

const newsFeed = async () => {
  const trendingNews = await fetchTrending();
  // console.log(trendingNews);

  return (
    <div className="pl-5 pr-5 ">
      <h1 className="pb-8">This is the news feed</h1>
      <ul role="list">
        {trendingNews.articles.map((item: any) => (
          <div className="my-3 bg-sky-950 shadow-md">
            <li className="pb-8" key={item.title}>
              <h1>{item.title}</h1>
              <p className="pb-2">{item.description}</p>
              <Link href={item.url}>{item.url}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default newsFeed;
