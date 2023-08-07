"use server";

import { Language } from "./LanguageSelector";

const API_KEY = process.env.API_KEY;

export const apiCall = async (language: Language) => {
  const gnewsapiTrending = `https://gnews.io/api/v4/top-headlines?category=general&lang=${language}&apikey=${API_KEY}`;
  const response = await fetch(`${gnewsapiTrending}`);
  const trendingNews = await response.json();
  return trendingNews;
};
