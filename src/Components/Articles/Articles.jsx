import { useEffect, useState } from "react";
import "./Articles.css";
import { getArticles } from "../../APIs";
import ArticleTile from "../ArticleTile/ArticleTile";

const Articles = ({ slug }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const queries = { params: { topic: slug } };
        getArticles(queries).then((apiArticles) => {
            setArticles(apiArticles);
        });
    }, []);

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
