import { NavLink } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <NavLink to="/" className="header-name">
          XONIX
        </NavLink>
        <div className="header-links">
          <NavLink
            className={({ isActive }) => (isActive ? "link__active" : "link")}
            to="/"
          >
            Main Page
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link__active" : "link")}
            to="/about"
          >
            About me
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link__active" : "link")}
            to="/projects"
          >
            Projects
          </NavLink>
        </div>
      </div>
    </header>
  );
}
