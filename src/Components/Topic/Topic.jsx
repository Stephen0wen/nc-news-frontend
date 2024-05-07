import "./Topic.css";
import { useParams } from "react-router-dom";
import Articles from "../Articles/Articles";
import TopicFooter from "../TopicFooter/TopicFooter";

const Topic = () => {
    const { slug } = useParams();

    const queries = { params: { topic: slug } };

    return (
        <main id="topic" className="flex-center">
            <h1 className="topic-title">{slug}</h1>
            <button id="sort">Sort</button>
            <Articles slug={slug} />
            <TopicFooter />
        </main>
    );
};

export default Topic;
