import { useEffect, useState } from "react";
import "./Article.css";
import { useParams } from "react-router-dom";
import { getArticle } from "../../APIs";
import ArticleFooter from "../ArticleFooter/ArticleFooter";

const Article = () => {
    const { article_id, slug } = useParams();

    const [article, setArticle] = useState({});

    useEffect(() => {
        getArticle(article_id).then((apiArticle) => {
            setArticle(apiArticle);
        });
    }, []);

    return (
        <>
            <article>
                <h1>{article.title}</h1>
            </article>
            <ArticleFooter slug={slug} />
        </>
    );
};

export default Article;
