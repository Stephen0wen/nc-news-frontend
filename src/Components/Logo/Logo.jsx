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
        <Link id="logo" to="/" onClick={handleClick}>
            SO-NEWS
        </Link>
    );
};

export default Logo;
