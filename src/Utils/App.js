import axios from "axios";
const api = axios.create({
  baseURL: "https://jade-landeg-news-api.herokuapp.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getArticleByID = (articleID) => {
  return api.get(`articles/${articleID}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticleID = (articleID) => {
  return api.get(`/articles/${articleID}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const getAllUsers = () => {
  return api.get(`/users`).then((res) => {
    return res.data.users;
  });
};

export const getAllTopics = () => {
  return api.get("/topics").then((res) => {
    return res.data.topics;
  });
};
