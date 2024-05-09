import { useState } from "react";
import "./Delete.css";
import { useParams } from "react-router-dom";
import { deleteComment } from "../../APIs";

const Delete = ({ comment_id, setIsDeleted }) => {
    const { article_id } = useParams();
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        console.log("Hello");
        setIsDisabled(true);
        if (comment_id) {
            deleteComment(comment_id).then(() => {
                setIsDeleted(true);
            });
        }
        if (!comment_id && article_id) {
            console.log("Delete article");
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
