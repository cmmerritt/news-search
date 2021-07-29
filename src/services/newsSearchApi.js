/* eslint-disable max-len */


export const fetchArticles = async () => {
  const apiKey = process.env.NEWS_API_KEY;
  const res = await fetch(`https://newsapi.org/v2/everything?q=dinosaur&apiKey=${apiKey}`);
  const json = await res.json();
  return json.articles;
};

// image url = urlToImage
// grab everything from json.articles.[key] e.g. json.articles.title
// unique id: use url?

