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
            <Expand expandId="create-topic" label="Start the conversation...">
                <p>Create a new topic form will go here...</p>
            </Expand>
        </main>
    );
};

export default Home;
