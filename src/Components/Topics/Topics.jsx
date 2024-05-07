import { useEffect, useState } from "react";
import { getTopics } from "../../APIs";
import "./Topics.css";

const Topics = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const apiTopics = getTopics().then((apiTopics) => {
            console.log(apiTopics);
            setTopics(apiTopics);
        });
    }, []);

    return (
        <section id="topics" className="flex-center">
            {topics.map((topic) => {
                return <div>{topic.slug}</div>;
            })}
        </section>
    );
};

export default Topics;
