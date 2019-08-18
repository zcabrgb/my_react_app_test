import NewsAPI from "./NewsAPI";


class Feed extends Component {
    state = {news: undefined }

    componentDidMount() {
    this.fetchNews();
    }
    
    render() { 
        return (  );
    }

    fetchNews = () => {
        try {
          fetch(requestUrl.requestURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    news: res
                  });
            });
        } catch (error) {
          console.log("Failed fetching data: ", error);
        }
      }
}
 
export default Feed;