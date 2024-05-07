import { Link } from "react-router-dom";
import Topics from "../Topics/Topics";
import Welcome from "../Welcome/Welcome";
import "./Home.css";

const Home = ({ user }) => {
    return (
        <main id="home">
            <Welcome user={user} />
            <Topics />
            <button>Start the conversation...</button>
        </main>
    );
};

export default Home;
