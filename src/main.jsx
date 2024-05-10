import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./Contexts/UserContext.jsx";
import { ErrorProvider } from "./Contexts/ErrorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ErrorProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </ErrorProvider>
    </BrowserRouter>
);
