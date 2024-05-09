import { useParams } from "react-router-dom";
import "./Vote.css";
import { patchArticle } from "../../APIs";

const Vote = ({ votes, setVotes, comment_id }) => {
    const { article_id } = useParams();

    const handleClick = () => {
        if (comment_id) {
            console.log("patch comment");
            setVotes(votes + 1);
        }
        if (!comment_id && article_id) {
            console.log("patch article");
            setVotes(votes + 1);
            patchArticle(article_id, 1).then((successful) => {
                console.log(successful);
                if (!successful) {
                    setVotes(votes - 1);
                }
            });
        }
    };

    return (
        <button onClick={handleClick} className="vote">
            <span>Vote</span>
            <span className="count"> {votes}</span>
        </button>
    );
};

export default Vote;
