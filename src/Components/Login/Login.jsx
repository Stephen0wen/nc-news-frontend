import { useContext } from "react";
import "./Login.css";

import { UserContext } from "../../Contexts/UserContext";

const Login = () => {
    const { user, isLoggedIn, setShowLoginPopup } = useContext(UserContext);

    const handleClick = () => {
        setShowLoginPopup(true);
    };

    if (!isLoggedIn) {
        return (
            <button id="login" onClick={handleClick}>
                Login
            </button>
        );
    }
    if (isLoggedIn) {
        return (
            <div id="user-display">
                <h2>{user.name}</h2>
                <img id="avatar" src={user.avatar_url} />
            </div>
        );
    }
};

export default Login;
