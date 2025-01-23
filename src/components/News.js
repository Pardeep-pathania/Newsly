

import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News =(props)=>{ 
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  // document.title =`${capitalizeFirstLetter(props.category)}-Newsly`;
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


 const updateNews=async()=>{
  props.setProgress(10);
  const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
    setLoading(true)
    const data = await fetch(url);
    props.setProgress(30);
    const parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false)

    props.setProgress(100);
 }

 useEffect(()=> {
  updateNews();
 }, [])
 
  const handlePrevClick = async()=>{
    console.log("Previous");
    // let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d100f01f84924b6bb36eead54202d56c&page=${page - 1}&pageSize=${props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    
    // this.setState({
    //   page:page - 1,
    //   articles:parsedData.articles,
    //   loading:false
    // })
    
    setPage(page-1);
    updateNews();
  }
  const handleNextClick = async()=>{
    console.log("Next");
    
    // if(!(page + 1> Math.ceil(totalResults/props.pageSize)))
    //   {let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d100f01f84924b6bb36eead54202d56c&page=${page + 1}&pageSize=${props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
      
    //   this.setState({
    //     page:page+1,
    //     articles:parsedData.articles,
    //     loading:false
    //   })
    // }
   
    setPage(page+1);
    updateNews();
  }
 const fetchMoreData = async() => {
    setPage(page+1);
    const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
    
  };
  
  
    return (
      <>
        <h1 className="text-center p-5" style={{margin:'35px 0px', marginTop:'90px'}}>Newsly-Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      {loading && <Spinner/>}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        > 
        <div className="container">
        <div className="row">
        {articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage}
             newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        
        </div>
        })}            
        </div>
        </div>
        </InfiniteScroll>
        </>
    )
  }
News.defaultProps = {
  country: 'us',
  pageSize: 9,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category: PropTypes.string, 
}

export default News