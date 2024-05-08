import { useEffect, useState } from "react";
import "./Expand.css";

const Expand = ({ children, label, expandId }) => {
    const [boxClasses, setBoxClasses] = useState("hidden");

    const handleClick = () => {
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
