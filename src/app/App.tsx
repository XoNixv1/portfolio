import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./app.scss";
import ContactForm from "../components/contact-form/ContactForm";
import { FormProvider } from "../hooks/FormProvider";
import AnimatedPages from "./AnimatedPages";

function App() {
  return (
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
  );
}

export default App;
