import "./Header.css";
import Logo from "../Logo/Logo";
import Login from "../Login/Login";

const Header = () => {
    return (
        <header id="header">
            <Logo />
            <Login />
        </header>
    );
};

export default Header;
