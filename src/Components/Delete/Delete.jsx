import "./Delete.css";
import { useParams } from "react-router-dom";

const Delete = ({ comment_id }) => {
    const { article_id } = useParams();

    return <button className="delete-button">Delete</button>;
};

export default Delete;
