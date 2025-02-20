import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../../pages/mainPage/MainPage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import About from "../../pages/aboutPage/About";
import ProjectsPage from "../../pages/projectsPage/ProjectsPage";
import NotFound from "../../pages/NotFound404/NotFound";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
