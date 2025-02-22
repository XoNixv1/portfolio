import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./index.css";
import "./media-queries.scss";

createRoot(document.getElementById("root")!).render(<App />);
