import { useFormik } from "formik";
import * as Yup from "yup";
import "./contactForm.scss";
import { useForm } from "../../hooks/FormProvider";
import { useEffect, useRef } from "react";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "name must be at least 3 characters")
    .required("name is required"),
  mail: Yup.string()
    .email("invalid email address")
    .required("email is required"),
  text: Yup.string()
    .max(420, "message must be not more than 420 characters")
    .required("message is required"),
});

export default function ContactForm() {
  const { closeForm, openedForm } = useForm();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOut = (e: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        closeForm();
      }
    };

    if (openedForm) {
      document.addEventListener("mousedown", handleClickOut);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [openedForm, closeForm]);

  const formik = useFormik({
    initialValues: {
      name: "",
      mail: "",
      text: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  if (!openedForm) {
    return null;
  }

  return (
    <div className="overlay">
      <form className="form" ref={formRef} onSubmit={formik.handleSubmit}>
        <span className="close-btn" onClick={() => closeForm()}></span>
        <p className="form__header">CONTACT</p>

        <div className="form__block">
          <label className="form__label" htmlFor="name">
            Your Name
          </label>
          <input
            className={`form__input ${
              formik.touched.name && formik.errors.name ? "invalid" : ""
            }`}
            id="name"
            type="text"
            aria-invalid={
              formik.touched.name && formik.errors.name ? "true" : "false"
            }
            {...formik.getFieldProps("name")}
          />
          <div
            className={`form__error ${
              formik.touched.name && formik.errors.name
                ? "form__error--visible"
                : ""
            }`}
            role="alert"
          >
            {formik.errors.name}
          </div>
        </div>

        <div className="form__block">
          <label className="form__label" htmlFor="mail">
            Your Email
          </label>
          <input
            className={`form__input ${
              formik.touched.mail && formik.errors.mail ? "invalid" : ""
            }`}
            id="mail"
            type="email"
            aria-invalid={
              formik.touched.mail && formik.errors.mail ? "true" : "false"
            }
            {...formik.getFieldProps("mail")}
          />
          <div
            className={`form__error ${
              formik.touched.mail && formik.errors.mail
                ? "form__error--visible"
                : ""
            }`}
            role="alert"
          >
            {formik.errors.mail}
          </div>
        </div>

        <div className="form__block">
          <label className="form__label" htmlFor="text">
            Your Message
          </label>
          <textarea
            className={`form__input form__input--txt ${
              formik.touched.text && formik.errors.text ? "invalid" : ""
            }`}
            id="text"
            aria-invalid={
              formik.touched.text && formik.errors.text ? "true" : "false"
            }
            {...formik.getFieldProps("text")}
          />
          <div
            className={`form__error ${
              formik.touched.text && formik.errors.text
                ? "form__error--visible"
                : ""
            }`}
            role="alert"
          >
            {formik.errors.text}
          </div>
        </div>

        <button className="contact-button form-btn" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
}
