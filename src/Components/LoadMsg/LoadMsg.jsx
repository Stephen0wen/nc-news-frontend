import "./LoadMsg.css";

const LoadMsg = ({ message }) => {
    return (
        <section id="load-message-container">
            <h3 id="load-message">{message}</h3>
            <p id="load-message-small">
                This may take up to a minute if no API requests have been made
                for a while...
            </p>
        </section>
    );
};

export default LoadMsg;
