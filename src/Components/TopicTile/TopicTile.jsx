import { Link } from "react-router-dom";
import "./TopicTile.css";

const TopicTile = ({ topic }) => {
    return (
        <Link to={`/${topic.slug}`} className="topic-tile">
            <h2>{topic.slug}</h2>
            <p>{topic.description}</p>
        </Link>
    );
};

export default TopicTile;
