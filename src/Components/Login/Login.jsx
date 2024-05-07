import { useEffect, useState } from "react";
import "./Login.css";
import { getUser } from "../../APIs";

const Login = ({ user, setUser }) => {
    const [popupClasses, setPopupClasses] = useState("hidden");
    const [errorMsg, setErrorMsg] = useState("");

    const handleClick = () => {
        setPopupClasses("flex-center");
    };

    const handleClose = () => {
        setPopupClasses("hidden");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredUser =
            event.target.parentElement.children[0].children[0].value;
        getUser(enteredUser)
            .then((apiUser) => {
                setUser(apiUser);
            })
            .catch((err) => {
                setErrorMsg("User not found...");
            });
    };

    if (!Object.keys(user).length) {
        return (
            <>
                <button id="login" onClick={handleClick}>
                    Login
                </button>
                <div id="login-popup" className={popupClasses}>
                    <form>
                        <button id="login-close" onClick={handleClose}>
                            X
                        </button>
                        <fieldset>
                            <label>
                                Username
                                <input></input>
                                <p>{errorMsg}</p>
                            </label>
                            <button type="submit" onClick={handleSubmit}>
                                Sign In
                            </button>
                        </fieldset>
                    </form>
                </div>
            </>
        );
    }
    if (Object.keys(user).length) {
        return (
            <div id="user-display">
                <h2>{user.name}</h2>
                <img id="avatar" src={user.avatar_url} />
            </div>
        );
    }
};

export default Login;
