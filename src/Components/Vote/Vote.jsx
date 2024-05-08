import "./Vote.css";

const Vote = ({ count }) => {
    return (
        <button className="vote">
            <span>Vote</span>
            <span className="count"> {count}</span>
        </button>
    );
};

export default Vote;
