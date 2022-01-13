import { Link } from "react-router-dom";

const Home = ({ setTopic }) => {
  const clickSetTopicToAll = () => {
    setTopic("all");
  };
  return (
    <div>
      {" "}
      <h1>Home</h1>
      <p>Welcome to NC News</p>
      <section className="HomePageLinks">
        <p>
          <button onClick={clickSetTopicToAll}>
            {" "}
            <Link to={"/articles"}>See all articles </Link>
          </button>
        </p>
        <p>
          <button>
            {" "}
            <Link to={"/users"}>See all users</Link>
          </button>
        </p>
      </section>
    </div>
  );
};

export default Home;
