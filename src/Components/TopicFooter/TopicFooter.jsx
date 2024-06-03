import { Link, useParams } from "react-router-dom";
import "./TopicFooter.css";

const TopicFooter = () => {
    const { slug } = useParams();

    return (
        <footer id="topic-footer" className="flex-center">
            <button>Previous</button>
            <Link to={`/create/${slug}`}>
                <button>Create</button>
            </Link>
            <button>Next</button>
        </footer>
    );
};

export default TopicFooter;
