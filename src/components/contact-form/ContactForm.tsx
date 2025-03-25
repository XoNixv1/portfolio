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

interface FormFieldProps {
  id: keyof FormValues;
  label: string;
  type?: string;
  isTextarea?: boolean;
  value: string;
  error?: string;
  touched: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField = ({
  id,
  label,
  type = "text",
  isTextarea = false,
  value,
  error,
  touched,
  onChange,
}: FormFieldProps) => {
  const isInvalid = touched && error;
  const InputComponent = isTextarea ? "textarea" : "input";
  const name = id === "mail" ? "email" : id === "text" ? "message" : id;

  return (
    <div className="form__block">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <InputComponent
        className={`form__input ${isTextarea ? "form__input--txt" : ""} ${
          isInvalid ? "invalid" : ""
        }`}
        id={id}
        name={name}
        type={!isTextarea ? type : undefined}
        value={value}
        onChange={onChange}
        aria-invalid={isInvalid ? "true" : "false"}
      />
      <div
        className={`form__error ${isInvalid ? "form__error--visible" : ""}`}
        role="alert"
      >
        {error}
      </div>
    </div>
  );
};

const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.mail) {
    errors.mail = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.mail)) {
    errors.mail = "Email is invalid";
  }

  if (!values.text) {
    errors.text = "Message is required";
  }

  return errors;
};

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
  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
    setTouched((prev) => ({ ...prev, [id]: false }));
  };

  // SUBMIT
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      mail: true,
      text: true,
    });

    const errors = validateForm(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const formData = new FormData(e.target as HTMLFormElement);
      formData.append("access_key", "4a546538-5b16-48b9-82b9-58e8dbfb6a52");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      try {
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
      } catch (error) {
        console.error("Submission error:", error);
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

            <FormField
              id="name"
              label="Your Name"
              value={formValues.name}
              error={formErrors.name}
              touched={touched.name}
              onChange={handleChange}
            />

            <FormField
              id="mail"
              label="Your Email"
              type="email"
              value={formValues.mail}
              error={formErrors.mail}
              touched={touched.mail}
              onChange={handleChange}
            />

            <FormField
              id="text"
              label="Your Message"
              isTextarea
              value={formValues.text}
              error={formErrors.text}
              touched={touched.text}
              onChange={handleChange}
            />

            <button className="contact-button form-btn" type="submit">
              SEND
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
