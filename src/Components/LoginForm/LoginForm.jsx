import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./LoginForm.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function LoginForm({ setSignUpToggle }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setShowLoginPopup } = useContext(UserContext);

    // const auth = firebase.auth();

    const handleClose = () => {
        setShowLoginPopup(false);
        setEmail("");
        setPassword("");
    };

    const updateEmail = (event) => {
        setEmail(event.target.value);
    };

    const updatePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {};

    const handleSignUpLink = () => {
        setSignUpToggle(true);
    };

    return (
        <>
            <div id="login-container">
                <button type="button" id="close" onClick={handleClose}>
                    X
                </button>
                <form id="login">
                    <h2>Sign in to SO-NEWS</h2>
                    <label>
                        <p>Email</p>
                        <input onChange={updateEmail} value={email} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input
                            type="password"
                            onChange={updatePassword}
                            value={password}
                        />
                    </label>
                    <button type="button" onClick={handleSubmit}>
                        LOGIN
                    </button>
                </form>
            </div>
            <p id="under-form-message">
                Don't have an account?{" "}
                <span id="sign-up-link" onClick={handleSignUpLink}>
                    Sign Up
                </span>
            </p>
        </>
    );
}
