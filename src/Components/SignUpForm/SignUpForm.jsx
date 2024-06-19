import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./SignUpForm.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { postUser } from "../../APIs";

export default function SignUpForm({ setSignUpToggle }) {
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const { setShowLoginPopup, setIsLoggedIn, setAuthToken, setUser } =
        useContext(UserContext);

    const auth = firebase.auth();

    const handleClose = () => {
        setShowLoginPopup(false);
        setEmail("");
        setDisplayName("");
        setPassword1("");
        setPassword2("");
        setSignUpToggle(false);
    };

    const updateEmail = (event) => {
        setEmail(event.target.value);
    };

    const updateName = (event) => {
        setDisplayName(event.target.value);
    };

    const updatePassword1 = (event) => {
        setPassword1(event.target.value);
    };

    const updatePassword2 = (event) => {
        setPassword2(event.target.value);
    };

    const handleSubmit = () => {
        if (password1 === password2) {
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
                    console.log(error);
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
                        <input onChange={updateEmail} value={email} />
                    </label>
                    <label>
                        <p>Display Name</p>
                        <input
                            type="text"
                            onChange={updateName}
                            value={displayName}
                        />
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
