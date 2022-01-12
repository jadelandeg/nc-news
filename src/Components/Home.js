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
          <Link to={"/articles"}>
            <button onClick={clickSetTopicToAll}>See all articles</button>
          </Link>
        </p>
        <p>
          <Link to={"/users"}>See all users</Link>
        </p>
      </section>
    </div>
  );
};

export default Home;
