import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {" "}
      <h1>Home</h1>
      <p>Welcome to NC News</p>
      <section className="HomePageLinks">
        <p>
          <Link to={"/articles"}>See all articles</Link>
        </p>
        <p>
          <Link to={"/users"}>See all users</Link>
        </p>
      </section>
    </div>
  );
};

export default Home;
