import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./SignUpForm.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function SignUpForm({ setSignUpToggle }) {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const { setShowLoginPopup } = useContext(UserContext);

    // const auth = firebase.auth();

    const handleClose = () => {
        setShowLoginPopup(false);
        setEmail("");
        setPassword1("");
        setPassword2("");
    };

    const updateEmail = (event) => {
        setEmail(event.target.value);
    };

    const updatePassword1 = (event) => {
        setPassword1(event.target.value);
    };

    const updatePassword2 = (event) => {
        setPassword2(event.target.value);
    };

    const handleSubmit = (event) => {};

    const handleLoginLink = () => {
        setSignUpToggle(false);
    };

    return (
        <>
            <div id="sign-up-container">
                <button type="button" id="close" onClick={handleClose}>
                    X
                </button>
                <form id="sign-up">
                    <h2>Sign in to SO-NEWS</h2>
                    <label>
                        <p>Email</p>
                        <input onChange={updateEmail} value={email} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input
                            type="password"
                            onChange={updatePassword1}
                            value={password1}
                        />
                    </label>
                    <label>
                        <p>Re-Type Password</p>
                        <input
                            type="password"
                            onChange={updatePassword2}
                            value={password2}
                        />
                    </label>
                    <button type="button" onClick={handleSubmit}>
                        LOGIN
                    </button>
                </form>
            </div>
            <p id="under-form-message">
                Already have an account?{" "}
                <span id="login-link" onClick={handleLoginLink}>
                    Log In
                </span>
            </p>
        </>
    );
}
