import { Link } from "react-router-dom";
import Topics from "../Topics/Topics";
import Welcome from "../Welcome/Welcome";
import "./Home.css";
import Expand from "../Expand/Expand";

const Home = ({ user }) => {
    return (
        <main id="home">
            <Welcome user={user} />
            <Topics />
            <Expand label="Start the conversation...">
                <p>Things have expanded</p>
            </Expand>
        </main>
    );
};

export default Home;
