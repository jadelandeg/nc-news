import useVote from "../hooks/useVote";
import { updateArticleVotes } from "../Utils/utils";

const ArticleVotes = ({ article, setIsError }) => {
  const { changeVote, localVote } = useVote(article.votes);

  const handleVote = (num) => {
    changeVote(num);
    updateArticleVotes(article.article_id, num).catch(() => {
      changeVote(-num);
      setIsError(true);
    });
  };
  return (
    <div>
      <p>Votes: {localVote}</p>
      <button onClick={() => handleVote(1)}>Upvote!</button>
      <button onClick={() => handleVote(-1)}>Downvote!</button>
    </div>
  );
};

export default ArticleVotes;
