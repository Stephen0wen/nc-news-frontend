import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Topic from "./Components/Topic/Topic";
import Article from "./Components/Article/Article";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:slug" element={<Topic />} />
                <Route path="/:slug/:article_id" element={<Article />} />
            </Routes>
        </>
    );
}

export default App;
