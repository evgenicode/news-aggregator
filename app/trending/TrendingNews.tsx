import React from "react";
import mockResponse from "./mockResopnse.json";
import { NewsItem } from "../components/NewsItem";

const API_KEY = process.env.API_KEY;
const gnewsapiTrending = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=${API_KEY}`;
const apiUpdateRate = 60 * 60 * 24; // 24 hours
console.log(API_KEY);

// API call
const fetchTrending = async () => {
  const response = await fetch(`${gnewsapiTrending}`, {
    next: {
      revalidate: apiUpdateRate,
    },
  });
  const trendingNews = await response.json();
  return trendingNews;
};

// Mock API call
// const fetchTrending = async () => {
//   return mockResponse;
// };

export const TrendingNews = async () => {
  const trendingNews = await fetchTrending();
  // console.log(trendingNews);

  return (
    <div>
      <ul role="list">
        {trendingNews.articles.map((item: any) => (
          <NewsItem
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            url={item.url}
          />
        ))}
      </ul>
    </div>
  );
};
