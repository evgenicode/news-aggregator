"use client";
import React, { useState, useEffect } from "react";
import { LanguageDropdown, Language } from "../components/LanguageSelector";
import { LocationDropdown, Location } from "../components/LocationSelector";
import { apiCall } from "../components/ServerActions";
import { NewsItem } from "../components/NewsItem";

const NewsFeed: React.FC = () => {
  const [language, setLanguage] = useState(Language.English);
  const [location, setLocation] = useState(Location.AnyLocation);
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await apiCall(language, location);
      const uniqueArticles = [];
      const uniqueArticleTitles = new Set();

      for (const article of newsData.articles) {
        if (!uniqueArticleTitles.has(article.title)) {
          uniqueArticleTitles.add(article.title);
          uniqueArticles.push(article);
        }
      }

      setNews({ ...newsData, articles: uniqueArticles });
    };
    fetchData();
  }, [language, location]);

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
  };
  const handleLocationSelect = (selectedLocation: Location) => {
    setLocation(selectedLocation);
  };

  console.log(news);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <LanguageDropdown onSelect={handleLanguageSelect} />
        <LocationDropdown onSelect={handleLocationSelect} />
      </div>

      <div>
        <ul role="list">
          {news.articles.map((item: any) => (
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
    </div>
  );
};

export default NewsFeed;
