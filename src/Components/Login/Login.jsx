import { useContext } from "react";
import "./Login.css";

import { UserContext } from "../../Contexts/UserContext";
import { Link } from "react-router-dom";

const Login = () => {
    const { isLoggedIn, setShowLoginPopup, user } = useContext(UserContext);

    const openLoginForm = () => {
        setShowLoginPopup(true);
    };

    if (!isLoggedIn) {
        return (
            <button id="login-button" onClick={openLoginForm}>
                Login
            </button>
        );
    }
    if (isLoggedIn) {
        return (
            <Link to="/user" id="user-display">
                <h2>{user.name}</h2>
                <img id="avatar" src={user.avatar_url} />
            </Link>
        );
    }
};

export default Login;
