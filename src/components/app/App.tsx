import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../../pages/mainPage/MainPage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import About from "../../pages/aboutPage/About";
import ProjectsPage from "../../pages/projectsPage/ProjectsPage";
import NotFound from "../../pages/NotFound404/NotFound";
import "./app.scss";
import ContactForm from "../contact-form/ContactForm";
import { FormProvider } from "../../hooks/FormProvider";

function App() {
  return (
    <div className="app">
      <FormProvider>
        <Router>
          <div>
            <Header />
            <ContactForm />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </FormProvider>
    </div>
  );
}

export default App;
