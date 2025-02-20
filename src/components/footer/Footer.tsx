import { Link } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contacts">
        <a href="https://www.linkedin.com/in/khaled-noman-19384733b/">
          <img src="/assets/icons8-linkedin.svg" alt="Linkedin" />
        </a>
        <a href="https://github.com/XoNixv1">
          <img src="/assets/icons8-github.svg" alt="GitHub" />
        </a>
        <a href="https://x.com/XoNixLOL">
          <img src="/assets/icons8-twitter.svg" alt="Twitter" />
        </a>
      </div>
      <div className="footer__links">
        <Link to="/">• HOME •</Link>
        <Link to="/projects">• MY PROJECTS •</Link>
        <p>• CONCTACT ME •</p>
      </div>
      <p className="footer__rights">© Khaled 2025. All rights reserved.</p>
    </footer>
  );
}
