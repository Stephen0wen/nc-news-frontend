import "./Article.css";
import { useParams } from "react-router-dom";

const Article = () => {
    const { article_id, slug } = useParams();
    return (
        <article>
            <h1>Article #{article_id}</h1>
        </article>
    );
};

export default Article;
