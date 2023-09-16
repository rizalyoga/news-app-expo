const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getTopHeadlines = async (Category) => {
  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&category=${Category}`
  );

  if (data.status == 200) {
    return data.json();
  }

  return "Oops, Sorry there is some error";
};

export const getDataBasedOnKeyword = async (keyword) => {
  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&q=${keyword}`
  );

  if (data.status == 200) {
    return data.json();
  }

  return "Oops, Sorry there is some error";
};
