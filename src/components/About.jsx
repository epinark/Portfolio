import profile from "../images/esra.jpg";
import React, { useState, useEffect } from "react";
import Gif from "./Gif";
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
  } else if (greetings < 21 && greetings <= 24) {
    greetingText = t("goodevening");
    emoji = "✨";
  } else {
    greetingText = t("goodnight");
    emoji = "🌙";
  }
  return (
    <div className="about" id="about">
      <div id="about-scroll">
        <div className="profile">
          {/* <img src={profile} alt="profile-foto" /> */}
          <Gif />
        </div>
        <div className="text">
          <h1>
            {greetingText} <span className="shooting-star">{emoji}</span>
          </h1>
          <span>{t("me")} </span>{" "}
          <span className="handschrift">{t("title")}</span>
        </div>
      </div>
      <div className="text-container">
        <div className="text-details">
          <p>{t("aboutme")}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
