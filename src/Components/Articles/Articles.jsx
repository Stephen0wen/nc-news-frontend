import { useState, useEffect, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Articles.css";
import { getArticles } from "../../APIs";
import ArticleTile from "../ArticleTile/ArticleTile";
import { ErrorContext } from "../../Contexts/ErrorContext";
import { UserContext } from "../../Contexts/UserContext";
import LoadMsg from "../LoadMsg/LoadMsg";
import Expand from "../Expand/Expand";
import SortArticles from "../SortArticles/SortArticles";

const Articles = ({ slug }) => {
    const [articles, setArticles] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const { setError } = useContext(ErrorContext);
    const { isLoggedIn, setShowLoginPopup } = useContext(UserContext);
    const navigate = useNavigate();

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

    const handleClick = () => {
        if (isLoggedIn) {
            navigate(`/create/article/${slug}`);
        }
        if (!isLoggedIn) {
            setShowLoginPopup(true);
        }
    };

    if (isLoading) {
        return <LoadMsg message="Loading Articles..." />;
    }

    if (!articles.length) {
        return (
            <section id="articles" className="flex-center">
                <p>There are no articles here yet!</p>
                <button onClick={handleClick}>Create an Article</button>
            </section>
        );
    }

    return (
        <section id="articles" className="flex-center">
            {articles.length > 1 ? (
                <Expand expandId="sort" label="sort">
                    <SortArticles />
                </Expand>
            ) : (
                <></>
            )}
            {articles.map((article) => {
                return (
                    <ArticleTile key={article.article_id} article={article} />
                );
            })}
        </section>
    );
};

export default Articles;
