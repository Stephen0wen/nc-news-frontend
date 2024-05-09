import "./Delete.css";
import { useParams } from "react-router-dom";

const Delete = ({ comment_id }) => {
    const { article_id } = useParams();

    const handleClick = () => {
        if (comment_id) {
            console.log("Delete comment");
        }
        if (!comment_id && article_id) {
            console.log("Delete article");
        }
    };

    return (
        <button onClick={handleClick} className="delete-button">
            Delete
        </button>
    );
};

export default Delete;
