const NEWS_API_KEY = "&apiKey=30c2775b2837417abf5ed1f3fdc8a736";
let url = "https://newsapi.org/v2/top-headlines";

export const requestUrl = {
  requestURL: url + "?sources=bbc-news" + NEWS_API_KEY
};

fetchNews = () => {
  try {
    fetch(requestUrl.requestURL)
      .then(res => res.json())
      .then(res => {
        for (let id = 0; id < 10; id++) {}
      });
  } catch (error) {
    console.log("Failed fetching data: ", error);
  }
};
