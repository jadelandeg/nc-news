import useVote from "../hooks/useVote";
import moment from "moment";
import { deleteComment } from "../Utils/utils";
import { useState } from "react";

const SingleComment = ({ comment, user, setComments, comments }) => {
  const { changeVote, localVote } = useVote(comment.votes);
  const { comment_id, body, author, created_at } = comment;
  const [isDeleted, setIsDeleted] = useState(false);
  const [upDisable, setUpDisable] = useState(false);
  const [downDisable, setDownDisable] = useState(false);

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

  const handleVote = (num) => {
    changeVote(num);
    num === 1 ? setUpDisable(true) : setDownDisable(true);
  };

  return (
    <li className="items" key={comment_id}>
      <p className="comment-body">{body}</p>
      <p className="list-info">author: {author}</p>
      <p className="list-info">
        created at: {moment(created_at).format("MMMM Do YYYY")}
      </p>
      <p className="list-info">votes: {localVote}</p>
      {isDeleted && <p>comment deleted!</p>}
      {user === author && (
        <button onClick={() => handleDelete(comment_id)}>delete</button>
      )}
      <button
        disabled={upDisable}
        onClick={() => {
          handleVote(1);
        }}
      >
        Upvote!
      </button>
      <button
        disabled={downDisable}
        onClick={() => {
          handleVote(-1);
        }}
      >
        Downvote!
      </button>
    </li>
  );
};

export default SingleComment;
