"use client";
import React, { useState, useEffect } from "react";
import { LanguageDropdown } from "../components/LanguageSelector";
import { LocationDropdown, allLanguages } from "../components/LocationSelector";
import { CategoryDropdown } from "../components/CategorySelector";
import { Location, Language, Category } from "../components/enums";
import { apiCall } from "../components/ServerActions";
import { NewsItem } from "../components/NewsItem";

const NewsFeed: React.FC = () => {
  const [availableLanguages, setAvailableLanguages] =
    useState<Language[]>(allLanguages);
  const [selectedLanguage, setSelectedLanguage] = useState(Language.English);
  const [selectedCategory, setSelectedCategory] = useState(Category.General);
  const [location, setLocation] = useState(Location.AnyLocation);
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    // console.log("useEffect for shouldFetchData");

    const fetchData = async () => {
      // console.log("Fetching data with language:", selectedLanguage);
      // console.log("Fetching data with location:", location);
      // console.log("Available languages:", availableLanguages);
      const newsData = await apiCall(
        selectedLanguage,
        location,
        selectedCategory
      );
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
  }, [selectedLanguage, location, selectedCategory]);

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setSelectedLanguage(selectedLanguage);
  };

  const handleCategorySelect = (selectedCategory: Category) => {
    setSelectedCategory(selectedCategory);
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

    setSelectedLanguage(selectedLanguage);
    setLocation(selectedLocation.location);
  };

  // console.log(`This is news:${news}`);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="sm:mx-2 md:flex md:justify-between md:mx-10">
        <LanguageDropdown
          onSelect={handleLanguageSelect}
          availableLanguages={availableLanguages}
          defaultLanguage={selectedLanguage}
        />
        <LocationDropdown onSelect={handleLocationSelect} />

        <CategoryDropdown
          onSelect={handleCategorySelect}
          category={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
