import "./Topic.css";
import { useParams } from "react-router-dom";

const Topic = () => {
    const { slug } = useParams();
    return <h1 className="topic-title">{slug}</h1>;
};

export default Topic;
