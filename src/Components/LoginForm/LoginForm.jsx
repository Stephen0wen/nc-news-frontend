import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./LoginForm.css";
import GoogleButton from "../GoogleButton/GoogleButton";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function LoginForm({ setSignUpToggle }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setShowLoginPopup, setIsLoggedIn } = useContext(UserContext);

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

    const googleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((userCredential) => {
                if (userCredential) {
                    setIsLoggedIn(true);
                }
            })
            .then(() => {
                handleClose();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmit = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                if (userCredential) {
                    setIsLoggedIn(true);
                }
            })
            .then(() => {
                handleClose();
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                    <GoogleButton googleSignIn={googleSignIn} />
                    or
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
