import axios from "axios";

export const getUser = (username) => {
    return axios
        .get(`https://so-news.onrender.com/api/users/${username}`)
        .then(({ data: { user } }) => {
            return user;
        });
};
