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
            <article id="article">
                <h1>{article.title}</h1>
                <h2>By {article.author}</h2>
                <p>
                    <img src={article.article_img_url} />
                    {article.body}
                </p>
            </article>
            <ArticleFooter slug={slug} comment_count={article.comment_count} />
        </>
    );
};

export default Article;
