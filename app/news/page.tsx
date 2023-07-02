import React from "react";

import mockResponse from "./mockResopnse.json";
import Link from "next/link";
import Image from "next/image";

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

interface NewsItemProps {
  title: any;
  description: any;
  image: any;
  url: any;
}

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  description,
  image,
  url,
}) => {
  return (
    <div className="my-3 bg-green-700 shadow-lg p-5  flex md:items-start ">
      <li className=" pb-4 md:flex md:items-start ">
        <div className="  mx-auto md:mr-4 md:flex-shrink-0 w-60 ">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            unoptimized={true}
          />
        </div>

        <div className="ml-4 ">
          <h1 className=" text-center text-2xl md:pb-1 ">{title}</h1>
          <p className="pb-2 flex">{description}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      </li>
    </div>
  );
};

const newsFeed = async () => {
  const trendingNews = await fetchTrending();
  // console.log(trendingNews);

  return (
    <div className="md:container flex flex-col ">
      <ul role="list">
        {trendingNews.articles.map((item) => (
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

export default newsFeed;
