import { Link, useParams, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleByID } from "../Utils/App";
import Comments from "./Comments";

const SingleArticle = () => {
  const { articleID } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleByID(articleID).then((articleFromAPI) => {
      setArticle(articleFromAPI);
    });
  });

  return (
    <main className="single-article">
      <h2>Single Article</h2>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <p>
        Votes: {article.votes} Comment count: {article.comment_count}
      </p>
      <p>{article.created_at}</p>
      <button>Upvote!</button>
      <Link to={`/articles/${articleID}/NewComment`}>Leave a comment!</Link>
      <Routes>
        <Route
          path="/articles/:articleID/comments"
          element={<Comments articleID={articleID} />}
        />
      </Routes>
    </main>
  );
};

export default SingleArticle;
