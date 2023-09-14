export const getTopHeadlines = async (Category) => {
  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=d7603bcb9ec24f268c2b3cd4bc1e6e12&category=${Category}`
  );

  if (data.status == 200) {
    return data.json();
  }

  //   return data;

  return "Oops, Sorry there is some error";
};
