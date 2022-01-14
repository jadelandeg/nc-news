import { useState } from "react";
import useVote from "../hooks/useVote";
import { updateArticleVotes } from "../Utils/utils";

const ArticleVotes = ({ article }) => {
  const { changeVote, localVote } = useVote(article.votes);
  const [isError, setIsError] = useState(false);
  const [upDisable, setUpDisable] = useState(false);
  const [downDisable, setDownDisable] = useState(false);

  const handleVote = (num) => {
    changeVote(num);
    num === 1 ? setUpDisable(true) : setDownDisable(true);
    updateArticleVotes(article.article_id, num).catch(() => {
      changeVote(-num);
      setIsError(true);
    });
  };
  return (
    <div>
      <p>Votes: {localVote}</p>
      {isError && <p>something went wrong! Your vote didn't register...</p>}
      <button onClick={() => handleVote(1)} disabled={upDisable}>
        Upvote!
      </button>
      <button onClick={() => handleVote(-1)} disabled={downDisable}>
        Downvote!
      </button>
    </div>
  );
};

export default ArticleVotes;
