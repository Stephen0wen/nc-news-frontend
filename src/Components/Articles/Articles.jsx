import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import "./Articles.css";
import { getArticles } from "../../APIs";
import ArticleTile from "../ArticleTile/ArticleTile";
import { ErrorContext } from "../../Contexts/ErrorContext";

const Articles = ({ slug }) => {
    const [articles, setArticles] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const { setError } = useContext(ErrorContext);

    useEffect(() => {
        const sort_by = searchParams.get("sort_by") || "created_at";
        const order = searchParams.get("order") || "desc";
        const queries = { params: { topic: slug, sort_by, order } };
        getArticles(queries)
            .then((apiArticles) => {
                setArticles(apiArticles);
            })
            .catch((apiError) => {
                setError(apiError.response.data);
            });
    }, [searchParams]);

    return (
        <section id="articles" className="flex-center">
            {articles.map((article) => {
                return (
                    <ArticleTile key={article.article_id} article={article} />
                );
            })}
        </section>
    );
};

export default Articles;
