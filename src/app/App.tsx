import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/contact-form/ContactForm";
import { FormProvider } from "../hooks/FormProvider";
import { ThemeProvider } from "../hooks/ThemeProvider";
import AnimatedPages from "./AnimatedPages";
import "./app.scss";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <FormProvider>
          <Router>
            <Header />
            <ContactForm />
            <AnimatedPages />
            <Footer />
          </Router>
        </FormProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
