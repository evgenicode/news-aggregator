"use server";

import { Location, Language, Category } from "./enums";

const API_KEY = process.env.API_KEY;

export const apiCall = async (
  language: Language,
  location: Location,
  category: Category
) => {
  try {
    const gnewsapiTrending = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&country=${location}&apikey=${API_KEY}`;
    const response = await fetch(`${gnewsapiTrending}`);

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error(
          "Access forbidden. You do not have permission to access this resource."
        );
      } else {
        throw new Error(
          `Failed to fetch data. Status: ${response.status} ${response.statusText}`
        );
      }
    }

    const trendingNews = await response.json();
    return trendingNews;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
