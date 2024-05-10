import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Topic from "./Components/Topic/Topic";
import Article from "./Components/Article/Article";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import { useContext } from "react";
import { ErrorContext } from "./Contexts/ErrorContext";
import ErrorDisplay from "./Components/ErrorDisplay/ErrorDisplay";

function App() {
    const { error } = useContext(ErrorContext);

    if (error) {
        return (
            <>
                <ErrorDisplay />
                <Header />
            </>
        );
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:slug" element={<Topic />} />
                <Route path="/:slug/:article_id" element={<Article />} />
                <Route path="*" element={<ErrorDisplay notFound={true} />} />
            </Routes>
            <Header />
            <LoginPopup />
        </>
    );
}

export default App;
