import { useState } from "react";

const useVote = (votes) => {
  const [localVote, setLocalVote] = useState(votes);
  const changeVote = (num) => {
    setLocalVote((localVote) => localVote + num);
  };

  return { changeVote, localVote };
};

export default useVote;
