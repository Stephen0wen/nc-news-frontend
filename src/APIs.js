import axios from "axios";

export const getUser = (username) => {
    return axios
        .get(`https://so-news.onrender.com/api/users/${username}`)
        .then(({ data: { user } }) => {
            return user;
        });
};

export const getTopics = () => {
    return axios
        .get(`https://so-news.onrender.com/api/topics`)
        .then(({ data: { topics } }) => {
            return topics;
        });
};

export const getArticles = (queries) => {
    return axios
        .get(`https://so-news.onrender.com/api/articles`, queries)
        .then(({ data: { articles } }) => {
            return articles;
        });
};
