import "./Header.css";
import Logo from "../Logo/Logo";
import Login from "../Login/Login";

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Login />
        </div>
    );
};

export default Header;
