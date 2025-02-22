import { Link } from "react-router-dom";
import "./footer.scss";
import { useForm } from "../../hooks/FormProvider";

export default function Footer() {
  const { openForm } = useForm();
  return (
    <footer className="footer">
      <div className="footer__links">
        <Link className="footer__link" to="/">
          • HOME •
        </Link>
        <Link className="footer__link" to="/projects">
          • MY PROJECTS •
        </Link>
        <a
          className="footer__link"
          style={{ cursor: "pointer" }}
          onClick={() => openForm()}
        >
          • CONCTACT ME •
        </a>
      </div>
      <p className="footer__rights">© Khaled 2025. All rights reserved.</p>
    </footer>
  );
}
