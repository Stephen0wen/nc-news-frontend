import { Link } from "react-router-dom";
import "./TopicFooter.css";

const TopicFooter = () => {
    return (
        <footer id="topic-footer" className="flex-center">
            <button>Previous</button>
            <Link>
                <button>Create</button>
            </Link>
            <button>Next</button>
        </footer>
    );
};

export default TopicFooter;
