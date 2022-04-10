import React from 'react'
import { useState, useEffect } from 'react';

import Article from './Article'

function Articles() {
    // recoit en props le json de la bdd
    const [articles, setArticles] = useState([]);


    useEffect(() => {
      fetch("http://localhost:2345/getAllPosts.php", {
        method: 'GET',
        mode: 'cors'
      }).then(response => response.json())
      .then(responseJSON => setArticles(responseJSON))
      .catch ((error) => {console.log(error)})
      console.log(articles)
    }, []);

  return (
    <>
    <button onClick={e => console.log(articles)}></button>
    {articles ? articles.map((article, e) => {
        return <Article postTitle={article.title} postContent={article.content} userName={article.username} key={e}/>;
    }) : ''}
    </>
  )
}

export default Articles