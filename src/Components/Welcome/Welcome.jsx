import "./Welcome.css";

const Welcome = ({ user }) => {
    if (user.name) {
        return <h2 id="welcome">Welcome to NC-NEWS, {user.name}!</h2>;
    }
    if (!user.name) {
        return <h2 id="welcome">Welcome to NC-NEWS</h2>;
    }
};

export default Welcome;
