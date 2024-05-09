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

export const getArticle = (article_id) => {
    return axios
        .get(`https://so-news.onrender.com/api/articles/${article_id}`)
        .then(({ data: { article } }) => {
            return article;
        });
};

export const getComments = (article_id) => {
    return axios
        .get(`https://so-news.onrender.com/api/articles/${article_id}/comments`)
        .then(({ data: { comments } }) => {
            return comments;
        });
};

export const patchArticle = (article_id, change) => {
    const body = { inc_votes: change };
    return axios
        .patch(`https://so-news.onrender.com/api/articles/${article_id}`, body)
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
        .patch(`https://so-news.onrender.com/api/comments/${comment_id}`, body)
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
};

export const postComment = (article_id, requestBody) => {
    return axios
        .post(
            `https://so-news.onrender.com/api/articles/${article_id}/comments`,
            requestBody
        )
        .then(({ data: { comment } }) => {
            return comment;
        })

        .catch((error) => {
            return error;
        });
};

export const deleteComment = (comment_id) => {
    return axios
        .delete(`https://so-news.onrender.com/api/comments/${comment_id}`)
        .then(() => {
            console.log("Successful");
        });
};
