const NEWS_API_KEY = "&apiKey=30c2775b2837417abf5ed1f3fdc8a736";
let url = "https://newsapi.org/v2/top-headlines";

export const requestUrl = {
  requestURL: url + "?sources=bbc-news" + NEWS_API_KEY
};
