import { useEffect, useState } from "react";
import "./Article.css";
import { useParams } from "react-router-dom";
import { getArticle } from "../../APIs";

const Article = () => {
    const { article_id, slug } = useParams();

    const [article, setArticle] = useState({});

    useEffect(() => {
        getArticle(article_id).then((apiArticle) => {
            console.log(apiArticle);
            setArticle(apiArticle);
        });
    });

    return (
        <article>
            <h1>{article.title}</h1>
        </article>
    );
};

export default Article;
