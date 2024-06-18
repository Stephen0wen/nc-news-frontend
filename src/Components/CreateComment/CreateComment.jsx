import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { ErrorContext } from "../../Contexts/ErrorContext";
import "./CreateComment.css";
import CommentTile from "../CommentTile/CommentTile";
import { postComment, getComments } from "../../APIs";

const CreateComment = ({ setComments }) => {
    const { article_id } = useParams();
    const { user, isLoggedIn, setShowLoginPopup, authToken } =
        useContext(UserContext);
    const { setError } = useContext(ErrorContext);
    const [pending, setPending] = useState(false);
    const [newComment, setNewComment] = useState(null);

    const handleLogin = () => {
        setShowLoginPopup(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPending(true);
        const body = event.target[0].value;
        setNewComment({
            comment_id: Date.now(),
            votes: 0,
            created_at: "Pending...",
            author: user.username,
            body: body,
            article_id: article_id,
        });

        postComment(article_id, { body }, authToken)
            .then((apiComment) => {
                setNewComment(apiComment);
                setPending(false);
            })
            .then(() => {
                return getComments(article_id);
            })
            .then((apiComments) => {
                setComments(apiComments);
                setNewComment(null);
            })
            .catch((apiError) => {
                setError(apiError);
            });
    };

    if (isLoggedIn && !newComment) {
        return (
            <form
                id="create-comment"
                className="comment-tile"
                onSubmit={handleSubmit}
            >
                <span className="comment-author">{user.username}: </span>
                <textarea
                    id="input-comment"
                    cols={40}
                    rows={4}
                    placeholder="What are your thoughts?"
                ></textarea>
                <button type="submit">Post</button>
            </form>
        );
    }

    if (pending) {
        return (
            <div className="comment-tile">
                <p className="comment-body">
                    <span className="comment-author">
                        {newComment.author}:{" "}
                    </span>
                    {newComment.body}
                </p>
                <div className="comment-under">
                    <p className="comment-timestamp">{newComment.created_at}</p>
                </div>
            </div>
        );
    }

    if (!pending && newComment) {
        return <CommentTile comment={newComment} />;
    }

    if (!isLoggedIn) {
        return (
            <div id="create-comment" className="comment-tile">
                <p className="comment-body">
                    Log in to post your thoughts on this article...
                </p>
                <button onClick={handleLogin}>Login</button>
            </div>
        );
    }
};

export default CreateComment;
