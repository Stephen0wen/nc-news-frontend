import { useState } from "react";
import "./Delete.css";
import { useParams, useNavigate } from "react-router-dom";
import { deleteArticle, deleteComment } from "../../APIs";

const Delete = ({ comment_id, setIsDeleted }) => {
    const { article_id, slug } = useParams();
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsDisabled(true);
        if (comment_id) {
            deleteComment(comment_id).then(() => {
                setIsDeleted(true);
            });
        }
        if (!comment_id && article_id) {
            deleteArticle(article_id).then(() => {
                navigate(`/topics/${slug}`);
            });
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={isDisabled}
            className="delete-button"
        >
            Delete
        </button>
    );
};

export default Delete;
