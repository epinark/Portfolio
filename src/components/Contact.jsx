import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const { t } = useTranslation();
  const contactRef = useRef();
  const isContactlRefInView = useInView(contactRef);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )

      .then(
        (response) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
          console.error("Email sending error:", error);
        }
      );
  };

  return (
    <div className="contact-wrapper" id="contact" ref={contactRef}>
      <div className="contact-section">
        <motion.h2
          initial={{ x: "-300px" }}
          animate={isContactlRefInView ? { x: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {t("contact")}
          {/* <span className="border-c"></span> */}
        </motion.h2>

        <div className="contact-container">
          <div className="animation-container">
            {" "}
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
          <div className="form-container">
            {" "}
            <form onSubmit={sendEmail} ref={form} className="">
              <span>{t("hi")}</span>
              <textarea rows={6} className="" name="user_message" />
              <span>{t("email")}</span>
              <input name="user_email" type="text" className="" />
              <span>{t("closing")}</span>
              <button className="send-button">{t("send")}</button>
              {success && (
                <span className="">
                  Your message has been sent successfully!
                </span>
              )}
              {error && <span className="">Something went wrong!</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
