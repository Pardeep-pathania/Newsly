import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl,newsUrl}=this.props;
    return (
      <div className='my-3'>
       <div className="card">
  <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/1e3a/live/777c5e90-d3b7-11ef-9da7-c1c79bfc6e92.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
