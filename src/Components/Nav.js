import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { getAllTopics } from "../Utils/App";

const Nav = ({ topic, setTopic }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics()
      .then((topicsFromAPI) => {
        setTopics(topicsFromAPI);
      })
      .catch(() => {});
  }, []);

  const topicChange = (topic) => {
    setTopic(topic.slug);
  };
  console.log(topic);

  return (
    <div className="nav">
      <Link to="/">Home</Link>
      {topics.map((topic) => {
        return (
          <button
            key={topic.slug}
            onClick={() => {
              topicChange(topic);
            }}
          >
            <Link to="/articles">{topic.slug}</Link>
          </button>
        );
      })}
    </div>
  );
};

export default Nav;
