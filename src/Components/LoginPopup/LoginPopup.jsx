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
};

export default LoginPopup;
