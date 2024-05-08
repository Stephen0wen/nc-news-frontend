import "./CommentTile.css";
import { getDateTime } from "../../utils";
import Vote from "../Vote/Vote";

const CommentTile = ({ comment }) => {
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
                <Vote count={comment.votes} />
            </div>
        </div>
    );
};

export default CommentTile;
