import { getArticles, getArticlesQuery } from "../Utils/utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Articles = ({ topic, setTopic }) => {
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
  }, [topic]);

  const handleSort = (event) => {
    getArticlesQuery(event.target.value).then((sortedArticles) => {
      setArticles(sortedArticles);
    });
  };

  return (
    <div className="article-main">
      <h2>{topic} articles</h2>
      <label htmlFor="sortby">sort by:</label>
      <select name="sortby" id="sortby" onChange={handleSort}>
        <option value="created_at">date created newest first</option>
        <option value="comment_count">comment count highest to lowest</option>
        <option value="votes">votes highest to lowest</option>
      </select>
      <ul className="article-list">
        {topic === "all"
          ? articles.map((article) => {
              return (
                <li className="article-items" key={`${article.article_id}`}>
                  <Link to={`/articles/${article.article_id}`}>
                    {article.title}
                  </Link>
                  <p>Topic: {article.topic}</p>
                  <p>Author: {article.author}</p>
                  <p>Votes: {article.votes}</p>
                  <p>
                    Created At:{" "}
                    {moment(article.created_at).format("MMMM Do YYYY")}
                  </p>
                  <p>Comment Count: {article.comment_count}</p>
                </li>
              );
            })
          : articles
              .filter((article) => {
                return article.topic === topic;
              })
              .map((article) => {
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
