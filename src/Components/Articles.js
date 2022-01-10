import { getArticles } from "../Utils/App";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticles()
      .then((articlesFromAPI) => {
        setArticles(articlesFromAPI);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return (
    <div className="article-main">
      <h2>Articles</h2>
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <li key={`${article.article_id}`}>
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
              <p>Topic: {article.topic}</p>
              <p>Author: {article.author}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;