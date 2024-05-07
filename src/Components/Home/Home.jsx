import Welcome from "../Welcome/Welcome";
import "./Home.css";

const Home = ({ user }) => {
    return (
        <section id="home">
            <Welcome user={user} />
        </section>
    );
};

export default Home;
