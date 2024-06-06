import { useContext, useEffect, useState } from "react";
import { getTopics } from "../../APIs";
import "./Topics.css";
import TopicTile from "../TopicTile/TopicTile";
import { ErrorContext } from "../../Contexts/ErrorContext";
import LoadMsg from "../LoadMsg/LoadMsg";
import Expand from "../Expand/Expand";

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
                // setIsLoading(false);
            })
            .catch((apiError) => {
                setError(apiError);
            });
    }, []);

    if (isLoading) {
        return <LoadMsg message="Loading Topics..." />;
    }

    return (
        <>
            <section id="topics" className="flex-center">
                {topics.map((topic) => {
                    return <TopicTile key={topic.slug} topic={topic} />;
                })}
            </section>
            <Expand expandId="create-topic" label="Start the conversation...">
                <p>Create a new topic form will go here...</p>
            </Expand>
        </>
    );
};

export default Topics;
