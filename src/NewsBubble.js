import React from 'react';
import './App.css';
import './NewsBubble.css';

function NewsBubble(props) {

  const {
    title,
    url,
    source,
    author,
    publishedAt
  } = props.data;


  return (
    <div className="newsBubble" onClick={() => window.open(url, '_blank')}>
      <p>{title}</p>    
      <div className="meta">
        <h3>{source.name}</h3>
        <h3>{author}</h3>
        <h3>{publishedAt}</h3>
      </div>  
    </div>  
  );
}

export default NewsBubble;
