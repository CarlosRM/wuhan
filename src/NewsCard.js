import React from 'react';
import './App.css';
import './NewsCard.css';

function NewsCard(props) {

  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content
  } = props.data;


  return (
    <div className="newsCard" onClick={() => window.open(url, '_blank')}>
      <h2>{title}</h2>
      <div className="meta">
        <h3>{source.name}</h3>
        <h3>{author}</h3>
        <h3>{publishedAt}</h3>
      </div>
      <div className="newsWrapper">
        <div className="imageContainer">
          <img alt=""src={urlToImage}></img>
        </div>
        <div className="contentContainer">
          <p>{description}</p>
        </div>
      </div>
      
    </div>  
  );
}

export default NewsCard;
