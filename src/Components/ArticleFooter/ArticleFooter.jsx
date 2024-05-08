import "./ArticleFooter.css";
import { Link } from "react-router-dom";
import Expand from "../Expand/Expand";
import Comments from "../Comments/Comments";

const ArticleFooter = ({ slug, comment_count, votes }) => {
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
                            Comments
                            <span className="count"> {comment_count}</span>
                        </>
                    }
                >
                    <Comments />
                </Expand>
            </div>
            <button>
                Vote
                <span className="count"> {votes}</span>
            </button>
        </div>
    );
};

export default ArticleFooter;
