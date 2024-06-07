import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./TopicFooter.css";

const TopicFooter = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { isLoggedIn, setShowLoginPopup } = useContext(UserContext);

    const handleClick = () => {
        if (!isLoggedIn) {
            setShowLoginPopup(true);
        }
        if (isLoggedIn) {
            navigate(`/create/article/${slug}`);
        }
    };

    return (
        <footer id="topic-footer" className="flex-center">
            <button>Previous</button>
            <button onClick={handleClick}>Create</button>
            <button>Next</button>
        </footer>
    );
};

export default TopicFooter;
