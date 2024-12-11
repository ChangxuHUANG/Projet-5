import { NavLink } from "react-router-dom";
import LOGO from "../../images/LOGO.png";
import "../../sass/header.scss";

function Header() {
  return (
    <div className="navContainer">
      <img src={LOGO} alt="logo2" />
      <div className="linkContainer">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink
          to={"/apropos"}
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          A propos
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
