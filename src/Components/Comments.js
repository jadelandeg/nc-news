import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getCommentsByArticleID } from "../Utils/App";

const Comments = ({ articleID }) => {
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getCommentsByArticleID(articleID)
      .then((commentsFromAPI) => {
        setComments(commentsFromAPI);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [articleID]);

  return (
    <div className="comments">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>author: {comment.author}</p>
              <p>created at: {comment.created_at}</p>
              <p>votes: {comment.votes}</p>
              <button>Upvote!</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
