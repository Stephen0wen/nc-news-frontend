import "./ArticleFooter.css";
import { Link } from "react-router-dom";
import Expand from "../Expand/Expand";

const ArticleFooter = ({ slug }) => {
    return (
        <footer id="article-footer">
            <Link to={`/${slug}`}>
                <button>{slug}</button>
            </Link>
            <div>
                <Expand expandId="comments-container" label="comments">
                    <section id="comments">Comments will go here</section>
                </Expand>
            </div>
            <button>Vote</button>
        </footer>
    );
};

export default ArticleFooter;
