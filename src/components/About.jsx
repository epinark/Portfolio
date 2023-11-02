import profile from "../images/esra.jpg";
import anim from "../images/anim.gif";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import night from "../images/night.svg";

function About() {
  const [currenttime, setCurrenttime] = useState(new Date());
  const greetings = currenttime.getHours();

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
    greetingText = "Good Morning☕";
  } else if (greetings < 16) {
    greetingText = "Good Afternoon☀️";
  } else {
    greetingText = "Good Evening ";
    emoji = "🌟";
  }
  return (
    <div className="about" id="about">
      <div id="about-scroll">
        <div className="profile">
          <img src={profile} alt="profile-foto" />

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
            <Link to="/contact" duration={1000} className="social-icon">
              <i className="fa fa-envelope"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-container">
        <div className="text">
          <h1>
            {greetingText} <span className="shooting-star">{emoji}</span>
          </h1>
          <span className="handschrift">Junior Fullstack Web Developer</span>
        </div>
        <p className="paragraph">
          <span>
            I'm<span> Esra,</span>{" "}
          </span>{" "}
          <br />I was a math teacher who made a career change when I moved to
          Germany two years ago, taking it as an opportunity to explore new
          horizons while leveraging my background. My love for solving
          challenging problems and exploring different ways of solving them led
          me to embark on an ambitious journey as a full-stack web developer.
          Through my education and professional teaching years, I have developed
          a strong foundation in problem solving,{" "}
          <span className="handschrift">analytical thinking,</span> and{" "}
          <span className="handschrift">effective communication.</span>
        </p>
      </div>
    </div>
  );
}

export default About;
