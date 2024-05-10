import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import "./Articles.css";
import { getArticles } from "../../APIs";
import ArticleTile from "../ArticleTile/ArticleTile";
import { ErrorContext } from "../../Contexts/ErrorContext";

const Articles = ({ slug }) => {
    const [articles, setArticles] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const { setError } = useContext(ErrorContext);

    useEffect(() => {
        setIsLoading(true);
        const sort_by = searchParams.get("sort_by") || "created_at";
        const order = searchParams.get("order") || "desc";
        const queries = { params: { topic: slug, sort_by, order } };
        getArticles(queries)
            .then((apiArticles) => {
                setArticles(apiArticles);
            })
            .then(() => {
                setIsLoading(false);
            })
            .catch((apiError) => {
                setError(apiError);
            });
    }, [searchParams]);

    if (isLoading) {
        return (
            <section id="articles" className="flex-center">
                <h3>Articles are loading...</h3>
            </section>
        );
    }

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
