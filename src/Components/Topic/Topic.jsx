import "./Topic.css";
import { useParams } from "react-router-dom";
import Articles from "../Articles/Articles";
import CreateArticleFAB from "../CreateArticleFAB/CreateArticleFAB";

const Topic = () => {
    const { slug } = useParams();

    return (
        <main id="topic" className="flex-center">
            <h1 className="topic-title">{slug}</h1>
            <Articles slug={slug} />
            <CreateArticleFAB />
        </main>
    );
};

export default Topic;
