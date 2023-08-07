"use client";
import React, { useState, useEffect } from "react";
import { LanguageDropdown, Language } from "../components/LanguageSelector";
import { apiCall } from "../components/ServerActions";
import { NewsItem } from "../components/NewsItem";

const NewsFeed: React.FC = () => {
  const [language, setLanguage] = useState(Language.English);
  const [trendingNews, setTrendingNews] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const newsData = await apiCall(language);
      const uniqueArticles = [];
      const uniqueArticleTitles = new Set();

      for (const article of newsData.articles) {
        if (!uniqueArticleTitles.has(article.title)) {
          uniqueArticleTitles.add(article.title);
          uniqueArticles.push(article);
        }
      }

      setTrendingNews({ ...newsData, articles: uniqueArticles });
      setIsLoading(false);
    };
    fetchData();
  }, [language]);

  const handleLanguageSelect = (selectedLanguage: Language) => {
    // console.log("Selected language:", selectedLanguage);
    // // Perform actions based on the selected language (e.g., fetch news in the selected language)
    setLanguage(selectedLanguage);
  };

  console.log(trendingNews);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <LanguageDropdown onSelect={handleLanguageSelect} />

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
    </div>
  );
};

export default NewsFeed;
