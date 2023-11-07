import profile from "../images/esra.jpg";
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
    greetingText = "Good Afternoon🔆";
  } else {
    greetingText = "Good Evening ";
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
          <span>
            I'm<span> Esra,</span>{" "}
          </span>{" "}
          <span className="handschrift">Junior Fullstack Web Developer</span>
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
            Thanks for your interest in my portfolio, let me summarize my
            previous education and my enthusiasm in software development.
            <br />
            <br />
            I have a solid mathematical background, driven by a passion for
            precision, problem-solving, and logic. Through my studies in
            mathematics, I've cultivated an analytical mindset and a deep
            appreciation for structured thinking. My enthusiasm for solving
            complex problems and exploring different approaches led me to the
            world of coding. From the very beginning of this journey, I found
            great joy in witnessing the transformation of ideas into tangible
            products. <br />
            Now I am passionate about creating unique user interfaces and
            developing solutions that aim for a great user experience. Being
            confronted with new challenges, the wide range of knowledge and
            technologies, as well as being surrounded by the lively tech
            community, motivates and inspires me.
            {/* <span className="handschrift">analytical thinking,</span> and{" "}
            <span className="handschrift">effective communication.</span> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
