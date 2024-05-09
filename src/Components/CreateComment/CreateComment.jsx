import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./CreateComment.css";

const CreateComment = () => {
    const { article_id } = useParams();
    const { user, isLoggedIn, setShowLoginPopup } = useContext(UserContext);

    const handleLogin = () => {
        setShowLoginPopup(true);
    };

    if (isLoggedIn) {
        return (
            <form id="create-comment" className="comment-tile">
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
