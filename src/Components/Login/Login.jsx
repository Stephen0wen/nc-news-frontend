import { useContext, useEffect, useState } from "react";
import "./Login.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { UserContext } from "../../Contexts/UserContext";

const Login = () => {
    const { isLoggedIn, setShowLoginPopup } = useContext(UserContext);
    const [avatar_url, setAvatar_url] = useState("");
    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
        if (isLoggedIn) {
            const { currentUser } = firebase.auth();
            setAvatar_url(currentUser.photoURL);
            setDisplayName(currentUser.displayName);
        }
    }, [isLoggedIn]);

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
                <h2>{displayName}</h2>
                <img id="avatar" src={avatar_url} />
            </div>
        );
    }
};

export default Login;
