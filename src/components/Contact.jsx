import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Contact() {
  const { t } = useTranslation();
  const contactRef = useRef();
  const isContactlRefInView = useInView(contactRef);
  return (
    <div className="contact-wrapper" id="contact" ref={contactRef}>
      <div className="contact-section">
        <motion.h2
          initial={{ x: "-300px" }}
          animate={isContactlRefInView ? { x: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {t("contact")}
        </motion.h2>
        <span className="border-c"></span>
        <div className="contact-detail">
          <a
            className="contact"
            href="mailto:esrapinarkaya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="arrow">⟶</span>esrapinarkaya@gmail.com
          </a>
          <a
            className="contact"
            href="https://github.com/epinark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="arrow">⟶</span>
            github.com/epinark
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
