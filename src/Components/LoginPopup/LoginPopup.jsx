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
            .catch((error) => {
                console.log(error.message);
                if (error.message) {
                    setErrorMsg(error.message);
                }
                if (error.response.data.msg) {
                    setErrorMsg(error.response.data.msg);
                }
            });
    };

    return (
        <div id="login-popup" className={popupClasses}>
            <form onSubmit={handleSubmit}>
                <button type="button" id="login-close" onClick={handleClose}>
                    X
                </button>
                <div id="signin-fields">
                    <h3>
                        In the future, this will be handled 'properly', but
                        until then you can login as "tickle122", "jessjelly",
                        "grumpy19" or "weegembump"...
                    </h3>
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
