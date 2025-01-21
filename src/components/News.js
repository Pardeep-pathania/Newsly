




import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component { 

  static defaultProps = {
    country: 'us',
    pageSize: 9,
    category: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string, 
  }

capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  
constructor(props)
 { super(props);
  console.log("hello i am a constructor from news components");
  this.state = {
    articles:[],
    loading:false,
    page:1,
  }
   document.title =`${this.capitalizeFirstLetter(this.props.category)}-Newsly`;
 }

 async updateNews(){
  const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d100f01f84924b6bb36eead54202d56c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading:false
    })
 }

 async componentDidMount(){
    // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d100f01f84924b6bb36eead54202d56c&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({articles:parsedData.articles, 
    //   totalResults:parsedData.totalResults,
    //   loading:false
    // })
    this.updateNews();
  }
  handlePrevClick = async()=>{
    console.log("Previous");
    // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d100f01f84924b6bb36eead54202d56c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    
    // this.setState({
    //   page:this.state.page - 1,
    //   articles:parsedData.articles,
    //   loading:false
    // })
    this.setState({page:this.state.page - 1});
    this.updateNews();
  }
  handleNextClick = async()=>{
    console.log("Next");
    
    // if(!(this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)))
    //   {let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d100f01f84924b6bb36eead54202d56c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
      
    //   this.setState({
    //     page:this.state.page+1,
    //     articles:parsedData.articles,
    //     loading:false
    //   })
    // }
    this.setState({page:this.state.page + 1});
    this.updateNews();
  }
  
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Newsly-Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
      {this.state.loading && <Spinner/>}
      {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<h4>Loading...</h4>}
        > */}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage}
             newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        
        </div>
        })}            
        </div>
        {/* </InfiniteScroll> */}
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>&rarr; Next</button>
        </div>
      </div>
    )
  }
}

export default News