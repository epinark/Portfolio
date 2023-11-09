import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Section from "./components/Section";
import "./styles/Navbar.css";
import "./styles/About.css";
import "./styles/Skills.css";
import "./styles/Portfolio.css";
import "./styles/Contact.css";
import "./styles/Home.css";
import "./App.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import i18n from "./components/i18n";
import { useTranslation } from "react-i18next";

function setModeClass(isLightMode) {
  document.body.classList.remove("light-mode", "dark-mode");
  document.body.classList.add(isLightMode ? "dark-mode" : "light-mode");
}

function App() {
  const { t } = useTranslation();
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleLightMode = () => {
    setIsLightMode((prevMode) => !prevMode);
    setModeClass(!isLightMode);
  };

  useEffect(() => {
    setModeClass(isLightMode);
  }, [isLightMode]);

  const cvUrl = import.meta.env.VITE_CV_URL;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          cvUrl={cvUrl}
          isLightMode={isLightMode}
          toggleLightMode={toggleLightMode}
        />
        <Section id="about" content={<About />} />
        <Section id="skills" content={<Skills isLightMode={isLightMode} />} />
        <Section id="portfolio" content={<Portfolio />} />
        <Section id="contact" content={<Contact />} />
        <div className="sticky-left">
          <div className="social-media">
            <a
              className="social-icon"
              href="www.linkedin.com/in/esra-pinar-berkus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="social-icon"
              href="https://github.com/epinark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:esrapinarkaya@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="sticky-right">
          <a
            href="mailto:esrapinarkaya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            esrapinarkaya@gmail.com
          </a>
        </div>
        <footer className="footer">
          <div className="container">
            <span>
              {t("builtwith")} <span className="heart">❤️</span> {t("by")} Esra
              Pinar Berkus &copy; 2023
            </span>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
