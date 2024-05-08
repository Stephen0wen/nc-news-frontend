import "./CommentTile.css";
import { getDateTime } from "../../utils";

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
                <button className="comment-vote">Vote</button>
            </div>
        </div>
    );
};

export default CommentTile;
