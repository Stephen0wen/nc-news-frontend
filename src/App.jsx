import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Topic from "./Components/Topic/Topic";

function App() {
    const [user, setUser] = useState({});
    return (
        <>
            <Header user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/:slug" element={<Topic />} />
            </Routes>
        </>
    );
}

export default App;
