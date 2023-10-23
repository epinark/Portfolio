import profile from "../images/profile.jpg";
import anim from "../images/anim.gif";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
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
            <Link
              to="/contact"
              smooth={true}
              duration={1000}
              className="social-icon"
            >
              <i className="fa fa-envelope"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-container">
        <p className="text">
          Hi!{" "}
          <span>
            I'm<span> Esra,</span>{" "}
          </span>
          <div>
            Junior<span> FullStack Developer.</span>
          </div>
        </p>
        <p className="paragraph">
          I am a former math teacher in Turkey who made a career change when I
          moved to Germany two years ago, taking it as an opportunity to explore
          new horizons while leveraging my background. My love for solving
          challenging problems and exploring different ways of solving them led
          me to embark on an ambitious journey as a full-stack web developer.
          Through my education and professional teaching years, I have developed
          a strong foundation in problem solving, analytical thinking, and
          effective communication.
        </p>
      </div>
    </div>
  );
}

export default About;
