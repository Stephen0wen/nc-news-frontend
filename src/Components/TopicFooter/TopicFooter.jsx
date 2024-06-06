import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./TopicFooter.css";

const TopicFooter = () => {
    const { slug } = useParams();

    const { isLoggedIn, setShowLoginPopup } = useContext(UserContext);

    const handleClick = () => {
        setShowLoginPopup(true);
    };

    let create;
    if (isLoggedIn) {
        create = (
            <Link to={`/create/article/${slug}`}>
                <button>Create</button>
            </Link>
        );
    }

    if (!isLoggedIn) {
        create = <button onClick={handleClick}>Create</button>;
    }

    return (
        <footer id="topic-footer" className="flex-center">
            <button>Previous</button>
            {create}
            <button>Next</button>
        </footer>
    );
};

export default TopicFooter;
