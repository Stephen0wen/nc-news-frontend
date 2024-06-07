import "./CreateArticleFAB.css";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateArticleFAB = () => {
    const { isLoggedIn } = useContext(UserContext);
    const { slug } = useParams();

    const navigate = useNavigate();

    const handleClick = () => {
        if (isLoggedIn) {
            navigate(`/create/article/${slug}`);
        }
    };

    if (!isLoggedIn) {
        return;
    }

    return (
        <button id="FAB" onClick={handleClick}>
            Create Article
        </button>
    );
};

export default CreateArticleFAB;
