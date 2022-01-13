import useVote from "../hooks/useVote";
import moment from "moment";
import { deleteComment, getCommentsByArticleID } from "../Utils/utils";
import { useState } from "react";

const SingleComment = ({ comment, user, setComments, comments }) => {
  const { changeVote, localVote } = useVote(comment.votes);
  const { comment_id, body, author, created_at } = comment;
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = (commentID) => {
    setIsDeleted(true);
    deleteComment(commentID)
      .then(() => {
        setComments(
          comments.filter((comment) => {
            return comment.comment_id !== commentID;
          })
        );
      })
      .catch(() => {
        setIsDeleted(false);
      });
  };

  return (
    <li key={comment_id}>
      <p>{body}</p>
      <p>author: {author}</p>
      <p>created at: {moment(created_at).format("MMMM Do YYYY")}</p>
      <p>votes: {localVote}</p>
      {isDeleted && <p>comment deleted!</p>}
      {user === author && (
        <button onClick={() => handleDelete(comment_id)}>delete</button>
      )}
      <button
        onClick={() => {
          changeVote(1);
        }}
      >
        Upvote!
      </button>
      <button
        onClick={() => {
          changeVote(-1);
        }}
      >
        Downvote!
      </button>
    </li>
  );
};

export default SingleComment;
