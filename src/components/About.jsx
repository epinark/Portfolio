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
  } else {
    greetingText = t("goodevening");
    emoji = "✨";
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
