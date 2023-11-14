import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact-section">
        <h2>{t("contact")}</h2>
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
