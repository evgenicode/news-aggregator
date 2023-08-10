"use client";
import React, { useState, useEffect } from "react";
import { LanguageDropdown } from "../components/LanguageSelector";
import { LocationDropdown } from "../components/LocationSelector";
import { Location, Language } from "../components/enums";
import { apiCall } from "../components/ServerActions";
import { NewsItem } from "../components/NewsItem";
import { countryToLanguages } from "../components/LocationSelector";

const NewsFeed: React.FC = () => {
  const [availableLanguages, setAvailableLanguages] = useState<Language[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState(Language.English);
  const [location, setLocation] = useState(Location.AnyLocation);
  const [news, setNews] = useState<any>(null);
  // A flag to track whether both language and location have been updated
  const [shouldFetchData, setShouldFetchData] = useState(false);

  useEffect(() => {
    console.log("useEffect for shouldFetchData");
    if (shouldFetchData) {
      const fetchData = async () => {
        console.log("Fetching data with language:", selectedLanguage);
        console.log("Fetching data with location:", location);
        console.log("Available languages:", availableLanguages);
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
      setShouldFetchData(false);
    }
  }, [shouldFetchData]);

  useEffect(() => {
    // Set the flag to fetch data when both language and location change
    setShouldFetchData(true);
  }, [selectedLanguage, location]);

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setSelectedLanguage(selectedLanguage);
  };

  const handleLocationSelect = (
    selectedLocation: Location,
    availableLanguages: Language[]
  ) => {
    setLocation(selectedLocation);
    setAvailableLanguages(availableLanguages);
    setSelectedLanguage(
      countryToLanguages[selectedLocation]?.[0] || Language.English
    );

    // Set the default language based on the selected location
  };

  console.log(news);

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
