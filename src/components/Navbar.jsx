import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../images/logo.png";
import logodark from "../images/logodark.png";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <>
      {currentLanguage === "en" ? (
        <button onClick={() => changeLanguage("de")}>DE</button>
      ) : (
        <button onClick={() => changeLanguage("en")}>EN</button>
      )}
    </>
  );
}

const LightModeToggle = ({ isLightMode, toggleLightMode }) => {
  return (
    <button onClick={toggleLightMode}>
      {isLightMode ? (
        <i class="fa-solid fa-sun"></i>
      ) : (
        <i class="fa-solid fa-moon"></i>
      )}
    </button>
  );
};

function Navbar({ isLightMode, toggleLightMode, cvUrl }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "portfolio", "contact"];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 0) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scroll to the start of the element
        inline: "nearest", // Keep the element visible if it's partially visible
      });
    }
  };

  return (
    <div>
      <header>
        <nav>
          <Link
            to="/"
            className="title"
            onClick={() => scrollToSection("about")}
          >
            {isLightMode ? (
              <img src={logo} alt="logo" />
            ) : (
              <img src={logodark} alt="logo" />
            )}
          </Link>
          <div
            className={`menu ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>

          <ul onClick={toggleMenu} className={menuOpen ? "open" : ""}>
            <li onClick={() => scrollToSection("about")}>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
              >
                {t("about")}
              </a>
              <span className="underline"></span>
            </li>
            <li onClick={() => scrollToSection("skills")}>
              <a
                href="#skills"
                className={activeSection === "skills" ? "active" : ""}
              >
                {t("skills")}
              </a>
              <span className="underline"></span>
            </li>
            <li onClick={() => scrollToSection("portfolio")}>
              <a
                href="#portfolio"
                className={activeSection === "portfolio" ? "active" : ""}
              >
                Portfolio{" "}
              </a>
              <span className="underline"></span>
            </li>
            <li onClick={() => scrollToSection("contact")}>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
              >
                {t("contact")}
              </a>
              <span className="underline"></span>
            </li>
            <li>
              <a
                href={cvUrl}
                download="esrapinarberkus-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("resume")}
              </a>
              <span className="underline"></span>
            </li>
            <span className="switcher">
              <LanguageSwitcher />

              <LightModeToggle
                isLightMode={isLightMode}
                toggleLightMode={toggleLightMode}
              />
            </span>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
