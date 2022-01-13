import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleByID } from "../Utils/utils";
import Comments from "./Comments";
import ArticleVotes from "./ArticleVotes";
import NewComment from "./NewComment";

const SingleArticle = ({ comments, setComments, user }) => {
  const { articleID } = useParams();

  const [article, setArticle] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticleByID(articleID)
      .then((articleFromAPI) => {
        setArticle(articleFromAPI);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [articleID]);

  console.log(article.votes);

  return isError ? (
    <p>Something went wrong...Check your URL</p>
  ) : isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <div className="single-article">
        <h2>Single Article</h2>
        <h3>{article.title}</h3>
        <p>Topic: {article.topic}</p>
        <p>{article.body}</p>
        <ArticleVotes article={article} />
        <p>Comment count: {article.comment_count}</p>
      </div>
      <NewComment user={user} setComments={setComments} comments={comments} />
      <Comments
        user={user}
        articleID={articleID}
        comments={comments}
        setComments={setComments}
      />
    </main>
  );
};

export default SingleArticle;
