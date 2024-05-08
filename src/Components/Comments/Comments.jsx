import { useEffect, useState } from "react";

import "./Comments.css";
import { getComments } from "../../APIs";
import { useParams } from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const { article_id } = useParams();

    useEffect(() => {
        getComments(article_id).then((apiComments) => {
            setComments(apiComments);
        });
    }, []);

    return (
        <section>
            {comments.map((comment) => {
                return (
                    <p key={comment.comment_id}>
                        Comment #{comment.comment_id}
                    </p>
                );
            })}
        </section>
    );
};

export default Comments;
