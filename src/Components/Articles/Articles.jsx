import { useEffect, useState } from "react";
import "./Articles.css";
import { getArticles } from "../../APIs";

const Articles = ({ slug }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const queries = { params: { topic: slug } };
        getArticles(queries).then((apiArticles) => {
            setArticles(apiArticles);
        });
    }, []);

    return (
        <section id="articles">
            {articles.map((article) => {
                return <h2>{article.title}</h2>;
            })}
        </section>
    );
};

export default Articles;
