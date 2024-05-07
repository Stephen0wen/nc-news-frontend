import Topics from "../Topics/Topics";
import Welcome from "../Welcome/Welcome";
import "./Home.css";

const Home = ({ user }) => {
    return (
        <main id="home">
            <Welcome user={user} />
            <Topics />
        </main>
    );
};

export default Home;
