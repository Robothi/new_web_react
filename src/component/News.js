import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
      country: 'in',
      pageSize: 8,
      category:'general'
    }
    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        console.log("I am Robot constructor news");
        this.state = {
            articles: [],
            loading: false,
            page:1,
            totalResults:0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - Robot`;
    }
    async updateNews(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1aa1633c0cb34bce93c51eb4cb95fc5b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
      let data =await fetch(url);
      let parsedDate = await data.json();
      console.log(parsedDate);
      this.setState({articles:parsedDate.articles ,totalResults:parsedDate.totalResults,loading:false});
    
  }



    async componentDidMount(){
      this.updateNews();
      }
    handelPreviousclick =async()=> {
         this.setState({page:this.state.page - 1});
        this.updateNews();

    }
    handelNextclick =async()=> {
      console.log("Next")
      this.setState({page: this.state.page + 1});
      this.updateNews();
    }

  render() {
    return (
      <div className="contenar my-3">
        <h2 className="text-center">News API Top {this.capitalizeFirstLetter(this.props.category)} HeadLine</h2>
        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="row"> 
        {!this.state.loading && this.state.articles.map((element) =>{
            return  <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} urlToImage={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}source={element.source.name}/>
          </div>
        })}
        </div>
        </InfiniteScroll>
        <div className="contaner d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPreviousclick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handelNextclick}>&rarr; Next</button>

        </div>
      </div>
    );
  }
}



export default News;
