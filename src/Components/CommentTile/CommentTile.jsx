import "./CommentTile.css";
import { getDateTime } from "../../utils";
import Vote from "../Vote/Vote";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Delete from "../Delete/Delete";

const CommentTile = ({ comment }) => {
    const [votes, setVotes] = useState("");
    const [isOwnComment, setIsOwnComment] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const { user } = useContext(UserContext);

    useEffect(() => {
        setVotes(comment.votes);
    }, []);

    useEffect(() => {
        if (user.username === comment.author) {
            setIsOwnComment(true);
        } else {
            setIsOwnComment(false);
        }
    }, [user, comment]);

    if (isDeleted) {
        return;
    }

    if (!isOwnComment) {
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
    }

    if (isOwnComment) {
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
                    <Delete
                        comment_id={comment.comment_id}
                        setIsDeleted={setIsDeleted}
                    />
                </div>
            </div>
        );
    }
};

export default CommentTile;
