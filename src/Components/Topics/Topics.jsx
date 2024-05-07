import { useEffect, useState } from "react";
import { getTopics } from "../../APIs";
import "./Topics.css";
import TopicTile from "../TopicTile/TopicTile";

const Topics = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics().then((apiTopics) => {
            setTopics(apiTopics);
        });
    }, []);

    return (
        <section id="topics" className="flex-center">
            {topics.map((topic) => {
                return <TopicTile topic={topic} />;
            })}
        </section>
    );
};

export default Topics;
