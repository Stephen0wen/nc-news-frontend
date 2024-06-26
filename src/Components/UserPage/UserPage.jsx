import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./UserPage.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
    const {
        user,
        setUser,
        isLoggedIn,
        setShowLoginPopup,
        setIsLoggedIn,
        setAuthToken,
    } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            setShowLoginPopup(true);
            navigate("/");
        }
    });

    const signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                setUser({});
                setIsLoggedIn(false);
                setAuthToken("");
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <section id="user-page">
            <h2>{user.name}</h2>
            <img src={user.avatar_url} />
            <button onClick={signOut}>Log Out</button>
        </section>
    );
};

export default UserPage;
