import profile from "../images/esra.jpg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import night from "../images/night.svg";
import { useTranslation } from "react-i18next";

function About() {
  const [currenttime, setCurrenttime] = useState(new Date());
  const greetings = currenttime.getHours();
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrenttime(new Date());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let greetingText;
  let emoji;

  if (greetings < 12) {
    greetingText = t("goodmorning");
    emoji = "☕";
  } else if (greetings < 16) {
    greetingText = t("goodafternoon");
    emoji = "☀️";
  } else {
    greetingText = t("goodevening");
    emoji = "✨";
  }
  return (
    <div className="about" id="about">
      <div id="about-scroll">
        <div className="profile">
          <img src={profile} alt="profile-foto" />
        </div>
        <div className="text">
          <h1>
            {greetingText} <span className="shooting-star">{emoji}</span>
          </h1>
          <span>{t("me")} </span>{" "}
          <span className="handschrift">{t("title")}</span>
          {/* <div className="social-media">
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
            <Link to="/contact" duration={1000} className="social-icon">
              <i className="fa fa-envelope"></i>
            </Link>
          </div> */}
        </div>
      </div>
      <div className="text-container">
        <div className="text-details">
          <span className="border top-side"></span>
          <span className="border right-side"></span>
          <span className="border bottom-side"></span>
          <span className="border left-side"></span>
          <p className="paragraph">
            {t("aboutme")}
            {/* <span className="handschrift">analytical thinking,</span> and{" "}
            <span className="handschrift">effective communication.</span> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
