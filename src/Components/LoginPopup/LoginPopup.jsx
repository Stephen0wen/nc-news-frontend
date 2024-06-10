import "./LoginPopup.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";

const LoginPopup = () => {
    const { showLoginPopup } = useContext(UserContext);

    const [popupClasses, setPopupClasses] = useState("hidden");
    const [errorMsg, setErrorMsg] = useState("");
    const [signUpToggle, setSignUpToggle] = useState(false);

    useEffect(() => {
        if (showLoginPopup) {
            setPopupClasses("flex-center");
        }
        if (!showLoginPopup) {
            setErrorMsg("");
            setPopupClasses("hidden");
        }
    }, [showLoginPopup]);

    return (
        <div id="login-popup" className={popupClasses}>
            {signUpToggle ? (
                <SignUpForm setSignUpToggle={setSignUpToggle} />
            ) : (
                <LoginForm setSignUpToggle={setSignUpToggle} />
            )}
        </div>
    );

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
