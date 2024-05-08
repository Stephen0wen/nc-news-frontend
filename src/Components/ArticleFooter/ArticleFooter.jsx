import "./ArticleFooter.css";
import { Link } from "react-router-dom";
const ArticleFooter = ({ slug }) => {
    return (
        <footer id="article-footer" className="flex-center">
            <Link to={`/${slug}`}>
                <button>{slug}</button>
            </Link>
            <button>Comments</button>
            <button>Vote</button>
        </footer>
    );
};

export default ArticleFooter;
