import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./SignUpForm.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { postUser } from "../../APIs";
import {
    getEmailWarning,
    getNameWarning,
    getPasswordWarning,
} from "../../utils";

export default function SignUpForm({ setSignUpToggle }) {
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [validForm, setValidForm] = useState(false);
    const [emailWarning, setEmailWarning] = useState("");
    const [displayNameWarning, setDisplayNameWarning] = useState("");
    const [password1Warning, setPassword1Warning] = useState("");
    const [password2Warning, setPassword2Warning] = useState("");

    const { setShowLoginPopup, setIsLoggedIn, setAuthToken, setUser } =
        useContext(UserContext);

    const auth = firebase.auth();

    useEffect(() => {
        const isValid = [
            emailWarning,
            displayNameWarning,
            password1Warning,
            password2Warning,
        ].every((warning) => !warning);
        console.log(isValid);
        setValidForm(isValid);
    }, [emailWarning, displayNameWarning, password1Warning, password2Warning]);

    const handleClose = () => {
        setShowLoginPopup(false);
        setEmail("");
        setEmailWarning("");
        setDisplayName("");
        setDisplayNameWarning("");
        setPassword1("");
        setPassword2("");
        setSignUpToggle(false);
    };

    const updateEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        const warning = getEmailWarning(newEmail);
        setEmailWarning(warning);
    };

    const updateName = (event) => {
        const newName = event.target.value;
        setDisplayName(newName);
        const warning = getNameWarning(newName);
        setDisplayNameWarning(warning);
    };

    const updatePassword1 = (event) => {
        const newPassword = event.target.value;
        setPassword1(newPassword);
        const warning = getPasswordWarning(newPassword);
        setPassword1Warning(warning);
    };

    const updatePassword2 = (event) => {
        const newPassword = event.target.value;
        setPassword2(newPassword);
        const warning =
            newPassword === password1 ? "" : "Passwords do not match";
        setPassword2Warning(warning);
    };

    const handleSubmit = () => {
        if (validForm) {
            auth.createUserWithEmailAndPassword(email, password1)
                .then(({ user: { uid } }) => {
                    return Promise.all([
                        firebase.auth().currentUser.getIdToken(),
                        uid,
                    ]);
                })
                .then(([token, uuid]) => {
                    return Promise.all([
                        token,
                        postUser({
                            username: displayName,
                            name: displayName,
                            avatar_url:
                                "https://cdn-icons-png.flaticon.com/512/9187/9187604.png",
                            uuid,
                            auth: token,
                        }),
                    ]);
                })
                .then(([token, user]) => {
                    if (user) {
                        setAuthToken(token);
                        setIsLoggedIn(true);
                        setUser(user);
                    }
                })
                .then(() => {
                    handleClose();
                })
                .catch((error) => {
                    if (error.code === "auth/email-already-in-use") {
                        setEmailWarning(
                            "There is already an account registered with that email address"
                        );
                    }
                });
        }
    };

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
                    <h2>Sign up for SO-NEWS</h2>
                    <label>
                        <p>Email</p>
                        <input type="email" onBlur={updateEmail} />
                        <p className="warning">{emailWarning}</p>
                    </label>
                    <label>
                        <p>Display Name</p>
                        <input
                            type="text"
                            onChange={updateName}
                            value={displayName}
                        />
                        <p className="warning">{displayNameWarning}</p>
                    </label>
                    <label>
                        <p>Password</p>
                        <input
                            type="password"
                            onChange={updatePassword1}
                            value={password1}
                        />
                        <p className="warning">{password1Warning}</p>
                    </label>
                    <label>
                        <p>Re-Type Password</p>
                        <input
                            type="password"
                            onChange={updatePassword2}
                            value={password2}
                        />
                        <p className="warning">{password2Warning}</p>
                    </label>
                    <button type="button" onClick={handleSubmit}>
                        SIGN UP
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
