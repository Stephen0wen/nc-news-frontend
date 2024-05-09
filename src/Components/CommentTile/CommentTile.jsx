import "./CommentTile.css";
import { getDateTime } from "../../utils";
import Vote from "../Vote/Vote";
import { useEffect, useState } from "react";

const CommentTile = ({ comment }) => {
    const [votes, setVotes] = useState("");

    useEffect(() => {
        setVotes(comment.votes);
    }, []);

    return (
        <div className="comment-tile">
            <p className="comment-body">
                <span className="comment-author">{comment.author}: </span>
                {comment.body}
            </p>
            <div className="comment-under">
                <p className="comment-timestamp">
                    {getDateTime(comment.created_at)}
                </p>
                <Vote
                    votes={votes}
                    setVotes={setVotes}
                    comment_id={comment.comment_id}
                />
            </div>
        </div>
    );
};

export default CommentTile;
