import { Link } from "react-router-dom";
import Topics from "../Topics/Topics";
import Welcome from "../Welcome/Welcome";
import "./Home.css";
import Expand from "../Expand/Expand";

const Home = () => {
    return (
        <main id="home">
            <Welcome />
            <Topics />
        </main>
    );
};

export default Home;
