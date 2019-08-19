import NewsAPI from "./NewsAPI";
import NewsCard from "./NewsCard";
import React, {Component} from "react";
import {requestUrl} from "./NewsAPI";

class Feed extends Component {
  state = {news: undefined};

  componentDidMount() {
    this.fetchNews();
  }

  render() {
    return (
      <div className="App-content">
        <div className="row" style={{marginTop: 20}}>
          <div>{this.displayFeed()}</div>
        </div>
      </div>
    );
  }

  fetchNews = () => {
    try {
      fetch(requestUrl.requestURL)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            news: res
          });
        });
    } catch (error) {
      console.log("Failed fetching data: ", error);
    }
  };

  displayFeed = () => {
    const news = this.state.news;
    let counter = [];

    for (let index = 0; index < 10; index++) {
      counter[index] = index;
    }
    if (news) {
      return (
        <ul>
          {counter.map(counter => (
            <li key={news.articles[counter].title}>
              <NewsCard
                picture={news.articles[counter].urlToImage}
                author={news.articles[counter].author}
                title={news.articles[counter].title}
                description={news.articles[counter].description}
                date={news.articles[counter].publishedAt}
                image={news.articles[counter].urlToImage}
              />
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };
}

export default Feed;
