import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [authToken, setAuthToken] = useState("");

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                isLoggedIn,
                setIsLoggedIn,
                showLoginPopup,
                setShowLoginPopup,
                authToken,
                setAuthToken,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
