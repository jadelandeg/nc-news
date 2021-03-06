import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle";
import Home from "./Components/Home";
import NewComment from "./Components/NewComment";
import Users from "./Components/Users";
import SingleUser from "./Components/SingleUser";
import Error from "./Components/Error";
import LoggedIn from "./Components/LoggedIn";

function App() {
  const [topic, setTopic] = useState("all");
  const [user, setUser] = useState("grumpy19");

  return (
    <div className="App">
      <BrowserRouter>
        <Nav setTopic={setTopic} topic={topic} />
        <LoggedIn user={user} />
        <Routes>
          <Route path="/" element={<Home setTopic={setTopic} />} />
          <Route
            path="/articles"
            element={<Articles topic={topic} setTopic={setTopic} />}
          />
          <Route
            path="/articles/:articleID/*"
            element={<SingleArticle user={user} />}
          />
          <Route
            path="/articles/:articleID/NewComment"
            element={<NewComment user={user} />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<SingleUser />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
