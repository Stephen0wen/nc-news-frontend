import "./Header.css";
import Logo from "../Logo/Logo";
import Login from "../Login/Login";

const Header = ({ user, setUser }) => {
    return (
        <header id="header">
            <Logo />
            <Login user={user} setUser={setUser} />
        </header>
    );
};

export default Header;
