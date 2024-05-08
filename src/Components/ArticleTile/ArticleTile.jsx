import { Link } from "react-router-dom";
import "./ArticleTile.css";

const ArticleTile = ({ article }) => {
    return (
        <Link
            to={`/${article.topic}/${article.article_id}`}
            className="article-tile"
        >
            <h2>{article.title}</h2>
            <h3>-{article.author}</h3>
        </Link>
    );
};

export default ArticleTile;
