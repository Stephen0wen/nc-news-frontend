import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./Vote.css";
import { patchArticle, patchComment } from "../../APIs";

const Vote = ({ votes, setVotes, comment_id }) => {
    const { article_id } = useParams();
    const { isLoggedIn, setShowLoginPopup } = useContext(UserContext);

    const handleClick = () => {
        if (!isLoggedIn) {
            setShowLoginPopup(true);
            return;
        }
        if (comment_id) {
            setVotes(votes + 1);
            patchComment(comment_id, 1).then((successful) => {
                if (!successful) {
                    setVotes(votes - 1);
                }
            });
        }
        if (!comment_id && article_id) {
            setVotes(votes + 1);
            patchArticle(article_id, 1).then((successful) => {
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
