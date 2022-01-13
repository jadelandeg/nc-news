import { useState } from "react";
import { useParams } from "react-router-dom";
import { postNewComment } from "../Utils/utils";

const NewComment = ({ user, comments, setComments }) => {
  const [formValue, setFormValue] = useState({ username: user, body: "" });
  const [isError, setIsError] = useState(false);

  const { articleID } = useParams();
  console.log(user);

  const handleChange = (event) => {
    setFormValue((prevFormValue) => {
      return { ...prevFormValue, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValue({ username: user, body: "" });
    postNewComment(articleID, formValue)
      .then((newCommentFromAPI) => {
        setComments([newCommentFromAPI, ...comments]);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  return isError ? (
    <p>error!</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <h2>New Comment</h2>
      <label htmlFor="body">Comment body</label>
      <input
        onChange={handleChange}
        type="text"
        name="body"
        id="body"
        value={formValue.body}
      ></input>
      <button type="submit">Post</button>
    </form>
  );
};

export default NewComment;
