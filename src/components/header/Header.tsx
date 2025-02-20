import { Link } from "react-router-dom";
import "./header.scss";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="wrapper">
        <Link to="/" className="header-name">
          XONIX
        </Link>
        <div className="header-links">
          <Link to="/">Main Page</Link>
          <Link to="/about">About me</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </header>
  );
}
