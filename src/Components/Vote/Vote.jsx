import { useParams } from "react-router-dom";
import "./Vote.css";

const Vote = ({ count, comment_id }) => {
    const { article_id } = useParams();

    const handleClick = () => {
        if (comment_id) {
            console.log("patch comment");
        }
        if (!comment_id && article_id) {
            console.log("patch article");
        }
    };

    return (
        <button onClick={handleClick} className="vote">
            <span>Vote</span>
            <span className="count"> {count}</span>
        </button>
    );
};

export default Vote;
