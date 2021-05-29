import React, { useEffect, useState } from "react";
import News from '../News/News'
const TopHeadline = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=377216151f6d49c8a42275e4684f449a";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
      
  }, []);
  return (
    <div>
      <h2>Top Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article ={article}></News>)
      }
    </div>
  );
};

export default TopHeadline;
