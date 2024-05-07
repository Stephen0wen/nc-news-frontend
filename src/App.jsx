import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={Home} />
            </Routes>
        </>
    );
}

export default App;
