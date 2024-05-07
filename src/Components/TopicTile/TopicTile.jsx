import "./TopicTile.css";

const TopicTile = ({ topic }) => {
    return (
        <div className="topic-tile">
            <h2>{topic.slug}</h2>
            <p>{topic.description}</p>
        </div>
    );
};

export default TopicTile;
