import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./header.scss";

interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: "/", label: "Main Page" },
  { path: "/about", label: "About me" },
  { path: "/projects", label: "Projects" },
];

const NavigationLink = ({ path, label }: NavItem) => (
  <NavLink
    className={({ isActive }) => (isActive ? "link__active" : "link")}
    to={path}
  >
    {label}
  </NavLink>
);

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <NavLink to="/" className="header-name">
          XONIX
        </NavLink>
        <div className="header-links">
          {navItems.map((item) => (
            <NavigationLink key={item.path} {...item} />
          ))}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
