import { Link } from "react-router-dom";
import "./Logo.css";
import { useContext } from "react";
import { ErrorContext } from "../../Contexts/ErrorContext";

const Logo = () => {
    const { setError } = useContext(ErrorContext);

    const handleClick = () => {
        setError(false);
    };

    return (
        <Link to="/" onClick={handleClick}>
            NC-News
        </Link>
    );
};

export default Logo;
