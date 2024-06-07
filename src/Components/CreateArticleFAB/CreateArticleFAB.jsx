import "./CreateArticleFAB.css";
import { UserContext } from "../../Contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useScrollDirection } from "use-scroll-direction";

const CreateArticleFAB = () => {
    const { isLoggedIn } = useContext(UserContext);
    const { slug } = useParams();
    const [isExpanded, setIsExpanded] = useState(true);
    const [labelClass, setLabelClass] = useState("Create Article");
    const { isScrollingUp, isScrollingDown } = useScrollDirection();

    const navigate = useNavigate();

    useEffect(() => {
        if (isExpanded) {
            setLabelClass("expanded");
        }
        if (!isExpanded) {
            setLabelClass("small");
        }
    }, [isExpanded]);

    useEffect(() => {
        if (isScrollingUp) {
            setIsExpanded(true);
        }
        if (isScrollingDown) {
            setIsExpanded(false);
        }
    }, [isScrollingUp, isScrollingDown]);

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
            <span className={labelClass}>Create Article</span>
            <span id="plus" class="material-symbols-outlined">
                add
            </span>
        </button>
    );
};

export default CreateArticleFAB;
