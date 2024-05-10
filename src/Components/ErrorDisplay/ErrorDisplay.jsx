import "./ErrorDisplay.css";
import { useContext } from "react";
import { ErrorContext } from "../../Contexts/ErrorContext";
import { useNavigate } from "react-router-dom";

const ErrorDisplay = ({ notFound }) => {
    const { error, setError } = useContext(ErrorContext);
    const navigate = useNavigate();

    const handleClick = () => {
        setError(false);
        if (notFound) {
            navigate("/");
        }
    };

    let message = "An error occured";

    if (error) {
        message = "Unable to connect to server...";
    }

    if (notFound) {
        message = "404 - Page not found.";
    }

    return (
        <div id="error-display">
            <h3 id="error-msg">{message}</h3>
            <button id="error-button" onClick={handleClick}>
                Back
            </button>
        </div>
    );
};

export default ErrorDisplay;
