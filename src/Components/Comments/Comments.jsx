import { useEffect, useState } from "react";

import "./Comments.css";
import { getComments } from "../../APIs";
import { useParams } from "react-router-dom";
import CommentTile from "../CommentTile/CommentTile";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const { article_id } = useParams();

    useEffect(() => {
        getComments(article_id).then((apiComments) => {
            setComments(apiComments);
        });
    }, []);

    return (
        <section id="comments">
            {comments.map((comment) => {
                return (
                    <CommentTile key={comment.comment_id} comment={comment} />
                );
            })}
        </section>
    );
};

export default Comments;
