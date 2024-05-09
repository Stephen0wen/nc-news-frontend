import "./ArticleFooter.css";
import { Link } from "react-router-dom";
import Expand from "../Expand/Expand";
import Comments from "../Comments/Comments";
import Vote from "../Vote/Vote";

const ArticleFooter = ({ slug, comment_count, votes, setVotes }) => {
    return (
        <div id="article-footer">
            <Link to={`/${slug}`}>
                <button>{slug}</button>
            </Link>
            <div>
                <Expand
                    expandId="comments-container"
                    label={
                        <>
                            <span>Comments</span>
                            <span className="count"> {comment_count}</span>
                        </>
                    }
                >
                    <Comments />
                </Expand>
            </div>
            <Vote votes={votes} setVotes={setVotes} />
        </div>
    );
};

export default ArticleFooter;
