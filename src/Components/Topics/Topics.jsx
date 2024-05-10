import { useContext, useEffect, useState } from "react";
import { getTopics } from "../../APIs";
import "./Topics.css";
import TopicTile from "../TopicTile/TopicTile";
import { ErrorContext } from "../../Contexts/ErrorContext";

const Topics = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { error, setError } = useContext(ErrorContext);

    useEffect(() => {
        setIsLoading(true);
        getTopics()
            .then((apiTopics) => {
                setTopics(apiTopics);
            })
            .then(() => {
                setIsLoading(false);
            })
            .catch((apiError) => {
                setError(apiError);
            });
    }, []);

    if (isLoading) {
        return (
            <section id="topics" className="flex-center">
                <h3>Topics are loading...</h3>
            </section>
        );
    }

    return (
        <section id="topics" className="flex-center">
            {topics.map((topic) => {
                return <TopicTile key={topic.slug} topic={topic} />;
            })}
        </section>
    );
};

export default Topics;
