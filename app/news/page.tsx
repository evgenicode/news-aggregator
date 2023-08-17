"use client";
import React, { useState, useEffect } from "react";
import { LanguageDropdown } from "../components/LanguageSelector";
import {
  LocationDropdown,
  allLanguages,
  countryToLanguages,
} from "../components/LocationSelector";
import { Location, Language } from "../components/enums";
import { apiCall } from "../components/ServerActions";
import { NewsItem } from "../components/NewsItem";

const NewsFeed: React.FC = () => {
  const [availableLanguages, setAvailableLanguages] =
    useState<Language[]>(allLanguages);
  const [selectedLanguage, setSelectedLanguage] = useState(Language.English);
  const [location, setLocation] = useState(Location.AnyLocation);
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    // console.log("useEffect for shouldFetchData");

    const fetchData = async () => {
      // console.log("Fetching data with language:", selectedLanguage);
      // console.log("Fetching data with location:", location);
      // console.log("Available languages:", availableLanguages);
      const newsData = await apiCall(selectedLanguage, location);
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
  }, [selectedLanguage, location]);

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setSelectedLanguage(selectedLanguage);
  };

  const handleLocationSelect = (
    selectedLocation: { location: Location; defaultLanguage: Language },
    availableLanguages: Language[]
  ) => {
    setAvailableLanguages(availableLanguages);

    const selectedLanguage =
      selectedLocation.location === Location.AnyLocation
        ? Language.English
        : selectedLocation.defaultLanguage;

    // handleLanguageSelect(selectedLanguage);
    setSelectedLanguage(selectedLanguage);
    setLocation(selectedLocation.location);
  };

  // console.log(`This is news:${news}`);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <LanguageDropdown
          onSelect={handleLanguageSelect}
          availableLanguages={availableLanguages}
          defaultLanguage={selectedLanguage}
        />
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
