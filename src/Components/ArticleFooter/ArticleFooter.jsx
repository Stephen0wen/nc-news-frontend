import "./ArticleFooter.css";
import { Link } from "react-router-dom";
import Expand from "../Expand/Expand";
import Comments from "../Comments/Comments";

const ArticleFooter = ({ slug, comment_count }) => {
    return (
        <footer id="article-footer">
            <Link to={`/${slug}`}>
                <button>{slug}</button>
            </Link>
            <div>
                <Expand
                    expandId="comments-container"
                    label={
                        <>
                            Comments{" "}
                            <span id="comment-count">{comment_count}</span>
                        </>
                    }
                >
                    <Comments></Comments>
                </Expand>
            </div>
            <button>Vote</button>
        </footer>
    );
};

export default ArticleFooter;
