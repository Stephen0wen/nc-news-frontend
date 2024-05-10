import { useEffect, useState, useContext } from "react";
import "./Article.css";
import { useParams } from "react-router-dom";
import { getArticle } from "../../APIs";
import ArticleFooter from "../ArticleFooter/ArticleFooter";
import { getDateTime } from "../../utils";
import { ErrorContext } from "../../Contexts/ErrorContext";

const Article = () => {
    const { article_id, slug } = useParams();

    const [article, setArticle] = useState({});
    const [votes, setVotes] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { setError } = useContext(ErrorContext);

    useEffect(() => {
        setIsLoading(true);
        getArticle(article_id)
            .then((apiArticle) => {
                setArticle(apiArticle);
            })
            .then(() => {
                setIsLoading(false);
            })
            .catch((apiError) => {
                setError(apiError);
            });
    }, []);

    useEffect(() => {
        setVotes(article.votes);
    }, [article]);

    if (isLoading) {
        return (
            <div id="article-loading" className="flex-center">
                <h3>Article is loading...</h3>
            </div>
        );
    }

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
                <p className="article-timestamp">
                    {getDateTime(article.created_at)}
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
