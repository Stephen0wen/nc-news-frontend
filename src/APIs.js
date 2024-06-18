import axios from "axios";

// const baseURL = "https://so-news.onrender.com";

const baseURL = "http://localhost:9090";

export const getUser = (uuid, auth) => {
    return axios
        .get(`${baseURL}/api/users/${uuid}`, {
            headers: { auth },
        })
        .then(({ data: { user } }) => {
            return user;
        });
};

export const postUser = ({ username, name, avatar_url, uuid, auth }) => {
    return axios
        .post(
            `${baseURL}/api/users`,
            { username, name, avatar_url, uuid },
            { headers: { auth } }
        )
        .then(({ data: { user } }) => {
            return user;
        })
        .catch(() => {
            return false;
        });
};

export const getUsers = (auth) => {
    return axios
        .get(`${baseURL}/api/users`, {
            headers: { auth },
        })
        .then(({ data: { users } }) => {
            return users;
        });
};

export const getTopics = () => {
    return axios.get(`${baseURL}/api/topics`).then(({ data: { topics } }) => {
        return topics;
    });
};

export const getArticles = (queries) => {
    return axios
        .get(`${baseURL}/api/articles`, queries)
        .then(({ data: { articles } }) => {
            return articles;
        });
};

export const getArticle = (article_id) => {
    return axios
        .get(`${baseURL}/api/articles/${article_id}`)
        .then(({ data: { article } }) => {
            return article;
        });
};

export const getComments = (article_id) => {
    return axios
        .get(`${baseURL}/api/articles/${article_id}/comments`)
        .then(({ data: { comments } }) => {
            return comments;
        });
};

export const patchArticle = (article_id, change) => {
    const body = { inc_votes: change };
    return axios
        .patch(`${baseURL}/api/articles/${article_id}`, body)
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
};

export const patchComment = (comment_id, change) => {
    const body = { inc_votes: change };
    return axios
        .patch(`${baseURL}/api/comments/${comment_id}`, body)
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
};

export const postComment = (article_id, requestBody) => {
    return axios
        .post(`${baseURL}/api/articles/${article_id}/comments`, requestBody)
        .then(({ data: { comment } }) => {
            return comment;
        });
};

export const deleteComment = (comment_id) => {
    return axios.delete(`${baseURL}/api/comments/${comment_id}`);
};

export const postArticle = (requestBody) => {
    return axios
        .post(`${baseURL}/api/articles`, requestBody)
        .then(({ data: { article } }) => {
            return article;
        });
};

export const deleteArticle = (article_id) => {
    return axios.delete(`${baseURL}/api/articles/${article_id}`);
};

export const postTopic = (requestBody) => {
    return axios
        .post(`${baseURL}/api/topics`, requestBody)
        .then(({ data: { topic } }) => {
            return topic;
        });
};

export const deleteTopic = (slug) => {
    return axios.delete(`${baseURL}/api/topics/${slug}`);
};
