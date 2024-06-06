import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Topic from "./Components/Topic/Topic";
import Article from "./Components/Article/Article";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import { useContext } from "react";
import { ErrorContext } from "./Contexts/ErrorContext";
import ErrorDisplay from "./Components/ErrorDisplay/ErrorDisplay";
import CreateArticle from "./Components/CreateArticle/CreateArticle";

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
                <Route path="/topics/:slug" element={<Topic />} />
                <Route path="/topics/:slug/:article_id" element={<Article />} />
                <Route path="/create/:slug" element={<CreateArticle />} />
                <Route path="*" element={<ErrorDisplay notFound={true} />} />
            </Routes>
            <Header />
            <LoginPopup />
        </>
    );
}

export default App;
