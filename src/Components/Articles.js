import { getArticles, getArticlesQuery } from "../Utils/utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Articles = ({ topic, setTopic }) => {
  const [articles, setArticles] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((articlesFromAPI) => {
        setArticles(articlesFromAPI);
        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [topic]);

  const handleSort = (event, asc) => {
    console.log(event.target);
    getArticlesQuery(event.target.value)
      .then((sortedArticles) => {
        setArticles(sortedArticles);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  return isError ? (
    <p>something went wrong...</p>
  ) : isLoading ? (
    <p>loading...</p>
  ) : (
    <div className="article-main">
      <h2>{topic} articles</h2>
      <label htmlFor="sortby">sort by:</label>
      <select name="sortby" id="sortby" onChange={handleSort}>
        <option value="created_at">date created newest first</option>
        <option value="comment_count">comment count highest to lowest</option>
        <option value="votes">votes highest to lowest</option>
      </select>
      {/* <select name="asc/desc" id="asc/desc" onChange={handleSort}>
        <option value="asc" id="asc/desc">
          ascending order
        </option>
        <option value="desc" id="asc/desc">
          descending order
        </option>
      </select> */}
      <ul className="list">
        {topic === "all"
          ? articles.map((article) => {
              return (
                <li className="items" key={`${article.article_id}`}>
                  <Link
                    to={`/articles/${article.article_id}`}
                    className="article-list-titles"
                  >
                    ➡️{article.title}⬅️
                  </Link>
                  <div className="list-info"></div>
                  <p className="list-info">Topic: {article.topic}</p>
                  <p className="list-info">Author: {article.author}</p>
                  <p className="list-info">Votes: {article.votes}</p>
                  <p className="list-info">
                    Created At:{" "}
                    {moment(article.created_at).format("MMMM Do YYYY")}
                  </p>
                  <p className="list-info">
                    Comment Count: {article.comment_count}
                  </p>
                </li>
              );
            })
          : articles
              .filter((article) => {
                return article.topic === topic;
              })
              .map((article) => {
                return (
                  <li key={`${article.article_id}`} className="items">
                    <Link
                      to={`/articles/${article.article_id}`}
                      className="article-list-titles"
                    >
                      ➡️{article.title}⬅️
                    </Link>
                    <p className="list-info">Topic: {article.topic}</p>
                    <p className="list-info">Author: {article.author}</p>
                    <p className="list-info">Votes: {article.votes}</p>
                    <p className="list-info">
                      Created At:{" "}
                      {moment(article.created_at).format("MMMM Do YYYY")}
                    </p>
                    <p className="list-info">
                      Comment Count: {article.comment_count}
                    </p>
                  </li>
                );
              })}
      </ul>
    </div>
  );
};

export default Articles;
