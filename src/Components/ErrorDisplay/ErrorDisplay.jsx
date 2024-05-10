import "./ErrorDisplay.css";
import { useContext } from "react";
import { ErrorContext } from "../../Contexts/ErrorContext";

const ErrorDisplay = () => {
    const { error, setError } = useContext(ErrorContext);

    const handleClick = () => {
        setError(false);
    };

    let message = "An error occured";

    if (error) {
        message = "Unable to connect to server...";
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
