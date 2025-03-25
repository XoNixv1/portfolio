import { NavLink } from "react-router-dom";
import "./header.scss";

// Navigation link configuration
interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: "/", label: "Main Page" },
  { path: "/about", label: "About me" },
  { path: "/projects", label: "Projects" },
];

// Reusable navigation link component
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
        </div>
      </div>
    </header>
  );
}
