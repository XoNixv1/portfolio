import "./contactForm.scss";
import { useForm } from "../../hooks/FormProvider";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import SuccessModal from "../successModal/SuccessModal";
import { motion, AnimatePresence } from "framer-motion";

interface FormErrors {
  name?: string;
  mail?: string;
  text?: string;
}
interface FormValues {
  name: string;
  mail: string;
  text: string;
}

export default function ContactForm() {
  const { closeForm, openedForm } = useForm();
  const [successOpened, setSuccessOpened] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    mail: "",
    text: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState({
    name: false,
    mail: false,
    text: false,
  });

  useEffect(() => {
    const handleClickOut = (e: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        closeForm();
      }
      if (
        successRef.current &&
        !successRef.current.contains(e.target as Node)
      ) {
        closeForm();
        setSuccessOpened(false);
      }
    };

    if (openedForm) {
      document.addEventListener("mousedown", handleClickOut);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [openedForm, closeForm]);

  const validate = () => {
    const errors: FormErrors = {};
    const updatedTouched: typeof touched = {
      name: false,
      mail: false,
      text: false,
    };

    if (!formValues.name) {
      errors.name = "Name is required";
      updatedTouched.name = true;
    }

    if (!formValues.mail) {
      errors.mail = "Email is required";
      updatedTouched.mail = true;
    } else if (!/\S+@\S+\.\S+/.test(formValues.mail)) {
      errors.mail = "Email is invalid";
      updatedTouched.mail = true;
    }

    if (!formValues.text) {
      errors.text = "Message is required";
      updatedTouched.text = true;
    }

    setTouched(updatedTouched);

    return errors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
    setTouched({ ...touched, [id]: false });
  };

  // SUBMIT
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    //sending with web3
    if (Object.keys(errors).length === 0) {
      const formData = new FormData(e.target as HTMLFormElement);

      formData.append("access_key", "4a546538-5b16-48b9-82b9-58e8dbfb6a52");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success && openedForm) {
        setFormValues({ name: "", mail: "", text: "" });
        setSuccessOpened(true);
      } else {
        console.error("Error:", res);
      }
    }
  };

  if (!openedForm) {
    return null;
  }

  return (
    <AnimatePresence>
      {successOpened ? (
        <motion.div
          key="success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overlay"
        >
          <SuccessModal
            successRef={successRef}
            setSuccessOpened={setSuccessOpened}
            closeForm={closeForm}
          />
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overlay"
        >
          <form
            noValidate
            className="form"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <span className="close-btn" onClick={closeForm}></span>
            <p className="form__header">CONTACT</p>

            <div className="form__block">
              <label className="form__label" htmlFor="name">
                Your Name
              </label>
              <input
                className={`form__input ${
                  touched.name && formErrors.name ? "invalid" : ""
                }`}
                id="name"
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                aria-invalid={
                  touched.name && formErrors.name ? "true" : "false"
                }
              />
              <div
                className={`form__error ${
                  touched.name && formErrors.name ? "form__error--visible" : ""
                }`}
                role="alert"
              >
                {formErrors.name}
              </div>
            </div>

            <div className="form__block">
              <label className="form__label" htmlFor="mail">
                Your Email
              </label>
              <input
                className={`form__input ${
                  touched.mail && formErrors.mail ? "invalid" : ""
                }`}
                id="mail"
                name="email"
                type="email"
                value={formValues.mail}
                onChange={handleChange}
                aria-invalid={
                  touched.mail && formErrors.mail ? "true" : "false"
                }
              />
              <div
                className={`form__error ${
                  touched.mail && formErrors.mail ? "form__error--visible" : ""
                }`}
                role="alert"
              >
                {formErrors.mail}
              </div>
            </div>

            <div className="form__block">
              <label className="form__label" htmlFor="text">
                Your Message
              </label>
              <textarea
                className={`form__input form__input--txt ${
                  touched.text && formErrors.text ? "invalid" : ""
                }`}
                id="text"
                name="message"
                value={formValues.text}
                onChange={handleChange}
                aria-invalid={
                  touched.text && formErrors.text ? "true" : "false"
                }
              />
              <div
                className={`form__error ${
                  touched.text && formErrors.text ? "form__error--visible" : ""
                }`}
                role="alert"
              >
                {formErrors.text}
              </div>
            </div>

            <button className="contact-button form-btn" type="submit">
              SEND
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
