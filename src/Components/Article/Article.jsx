import { useEffect, useState } from "react";
import "./Article.css";
import { useParams } from "react-router-dom";
import { getArticle } from "../../APIs";
import ArticleFooter from "../ArticleFooter/ArticleFooter";

const Article = () => {
    const { article_id, slug } = useParams();

    const [article, setArticle] = useState({});
    const [votes, setVotes] = useState("");

    useEffect(() => {
        getArticle(article_id).then((apiArticle) => {
            setArticle(apiArticle);
        });
    }, []);

    useEffect(() => {
        setVotes(article.votes);
    }, [article]);

    return (
        <>
            <article id="article">
                <h1>{article.title}</h1>
                <h2>
                    By {article.author} <span> - {votes} Votes</span>
                </h2>
                <p>
                    <img src={article.article_img_url} />
                    {article.body}
                </p>
            </article>
            <ArticleFooter
                slug={slug}
                comment_count={article.comment_count}
                votes={votes}
                setVotes={setVotes}
                author={article.author}
            />
        </>
    );
};

export default Article;
