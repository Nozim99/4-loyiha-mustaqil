import { API_URL } from "./config";

const getMealById = async (mealId) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealId);
  return await response.json();
};

const getByCategory = async () => {
  const response = await fetch(API_URL + "categories.php");
  return await response.json();
};

const byCategoryItems = async (item) => {
  const response = await fetch(API_URL + "filter.php?c=" + item);
  return await response.json();
};

export { getMealById, getByCategory, byCategoryItems };
