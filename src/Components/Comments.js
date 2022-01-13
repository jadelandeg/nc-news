import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getCommentsByArticleID } from "../Utils/utils";
import SingleComment from "./SingleComment.js";

const Comments = ({ articleID, setComments, comments, user }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleID(articleID)
      .then((commentsFromAPI) => {
        setComments(commentsFromAPI);
        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [articleID]);

  return isError ? (
    <p>something went wrong...</p>
  ) : isLoading ? (
    <p>loading...</p>
  ) : (
    <div className="comments">
      <h2 className="comments-title">Comments</h2>
      <ul className="list">
        {comments.map((comment) => {
          return (
            <SingleComment
              key={comment.comment_id}
              comment={comment}
              setComments={setComments}
              comments={comments}
              user={user}
              articleID={articleID}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
