import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src={Logo} alt="Logo Kasa" />
            <div className="header__navbar">
                <NavLink to="/">
                    <h3>Accueil</h3>
                </NavLink>
                <NavLink to="/about">
                    <h3>A propos</h3>
                </NavLink>
            </div>
        </div>
    )
}

export default Header;