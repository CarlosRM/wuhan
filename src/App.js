import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NewsCard from './NewsCard';
import NewsBubble from './NewsBubble';
import Main from './Main';

const APIKEY = 'b92941df07cd43d2b94e96452103b44c';
const keywords = ['wuhan', 'coronavirus', 'nCoV']
const wuhanNewsUrl = 'https://newsapi.org/v2/everything?' +
                      'q=' + keywords.join(' OR ') + '&' +
                      'sortBy=popularity&' +
                      'from=2020-02-01&' + 
                      'apiKey=' + APIKEY;



class App extends Component{

  constructor() {
    super()
    this.state = {
      loading: true,
      data: {}
    }
  }

  componentDidMount() {
    fetch(wuhanNewsUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          data: data
        })
      })
  }

  function 

  render() {

    console.log(this.state.data)

    const news = this.state.loading ? "Loading..." : this.state.data.articles.map((item, index) => <NewsCard key={index} data={item}/>)
    const newsBubbles = this.state.loading ? "Loading..." : this.state.data.articles.map((item, index) => <NewsBubble key={index} data={item}/>)
    return (
      <div className="App">
        <div id="news">{news}</div>
        <aside id="newsBubblesWrapper">
          <h2>Latest News</h2>
          <div id="newsBubbles">{newsBubbles}</div>
        </aside>
        <Main />
      </div>
    );
  }
  
}

export default App;
