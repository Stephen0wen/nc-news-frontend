import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./Expand.css";

const Expand = ({ children, label, expandId, loginOnly }) => {
    const [boxClasses, setBoxClasses] = useState("hidden");
    const { isLoggedIn, setShowLoginPopup } = useContext(UserContext);

    const handleClick = () => {
        if (loginOnly && !isLoggedIn) {
            setShowLoginPopup(true);
            return;
        }
        if (boxClasses === "hidden") {
            setBoxClasses("");
        }
        if (boxClasses !== "hidden") {
            setBoxClasses("hidden");
        }
    };

    return (
        <>
            <button onClick={handleClick}>{label}</button>
            <div id={expandId} className={boxClasses}>
                {children}
            </div>
        </>
    );
};

export default Expand;
