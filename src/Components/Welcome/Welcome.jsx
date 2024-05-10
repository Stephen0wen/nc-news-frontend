import "./Welcome.css";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

const Welcome = () => {
    const { user } = useContext(UserContext);

    if (user.name) {
        return <h2 id="welcome">Welcome to SO-NEWS, {user.name}!</h2>;
    }
    if (!user.name) {
        return <h2 id="welcome">Welcome to SO-NEWS</h2>;
    }
};

export default Welcome;
