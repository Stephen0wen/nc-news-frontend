import { useContext, useEffect, useState } from "react";
import "./Login.css";

import { UserContext } from "../../Contexts/UserContext";

const Login = () => {
    const { isLoggedIn, setShowLoginPopup, user } = useContext(UserContext);

    const handleClick = () => {
        setShowLoginPopup(true);
    };

    if (!isLoggedIn) {
        return (
            <button id="login-button" onClick={handleClick}>
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
