import "./LoginPopup.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { getUser } from "../../APIs";

const LoginPopup = () => {
    const { setIsLoggedIn, setUser, showLoginPopup, setShowLoginPopup } =
        useContext(UserContext);

    const [popupClasses, setPopupClasses] = useState("hidden");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (showLoginPopup) {
            setPopupClasses("flex-center");
        }
        if (!showLoginPopup) {
            setErrorMsg("");
            setPopupClasses("hidden");
        }
    }, [showLoginPopup]);

    const handleClose = () => {
        setShowLoginPopup(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredUser = event.target[1].value;
        if (enteredUser === "") {
            setErrorMsg("Enter username...");
            return;
        }
        getUser(enteredUser)
            .then((apiUser) => {
                setUser(apiUser);
                setIsLoggedIn(true);
                setShowLoginPopup(false);
            })
            .catch(() => {
                setErrorMsg("User not found...");
            });
    };

    return (
        <div id="login-popup" className={popupClasses}>
            <form onSubmit={handleSubmit}>
                <button type="button" id="login-close" onClick={handleClose}>
                    X
                </button>
                <div id="signin-fields">
                    <label>
                        Username
                        <input id="username" autoComplete="username"></input>
                        <p>{errorMsg}</p>
                    </label>
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPopup;
