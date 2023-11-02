import drtime from "../images/drtime.png";
import myip from "../images/myip.png";
import m from "../images/m.png";
import quiz from "../images/quiz.png";
import Section from "./Section";

function Portfolio() {
  return (
    <div id="portfolio">
      <div className="projects-container">
        <div className="upper-wrap">
          <div className="inner-wrap">
            <h2>
              My Projects<span className="dot">.</span>
            </h2>
            <span className="border-p"></span>
          </div>
        </div>

        <div className="project-card-outer">
          <Section
            id="project-card-drtime"
            content={
              <div className="animation">
                <span className="border-top"></span>
                <span className="border-right"></span>
                <span className="border-bottom"></span>
                <span className="border-left"></span>
                <div className="project-name">
                  <h2>DrTime</h2>
                  <div className="project-card">
                    <div className="project-card-inner">
                      <span className="description">
                        An app focused on simplifying the process of scheduling
                        doctor appointments and enabling find a primary doctor.
                        In a small team, my primary roles included: Developing
                        {/* specific frontend components. Managing backend
                        development, which encompassed setting up the server,
                        creating APIs, and ensuring communication with the
                        database. */}
                        <ul className="skills">
                          <li className="skill">React</li>
                          <li className="skill">Node.js</li>
                          <li className="skill">MongoDB</li>
                          <li className="skill">Express</li>
                        </ul>
                      </span>
                    </div>
                    <div>
                      <a
                        className="image-container"
                        href="https://drtime.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="project-image"
                          src={drtime}
                          alt="drtime"
                        />
                        <span className="view">View Project⟶</span>
                      </a>
                      <div className="connections">
                        <a
                          href="https://drtime.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                        <a
                          href="https://github.com/Gabriel3004/DrTime-client"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                        <a
                          href="https://github.com/Gabriel3004/DrTime-server"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          <Section
            id="project-card-myip"
            content={
              <div className="project-name">
                <h2>What's my IP?</h2>
                <div className="project-card-reverse">
                  <div className="project-card-inner">
                    <span className="description">
                      A small one-page React application that provides the user
                      with information about their current IP address, location,
                      and some additional details about their country.
                      <ul className="skills">
                        <li className="skill">React</li>
                        <li className="skill">Api</li>
                        <li className="skill">Leaflet</li>
                      </ul>
                    </span>
                  </div>
                  <div>
                    <a
                      className="image-container"
                      href="https://showmyplace.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="project-image" src={m} alt="drtime" />
                      <span className="view-reverse">View Project⟶</span>
                    </a>
                    <div className="connections">
                      <a
                        href="https://showmyplace.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-up-right-from-square"></i>
                      </a>
                      <a
                        href="https://github.com/epinark/my-ip"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <Section
            id="project-card-myip"
            content={
              <div className="project-name">
                <h2>Trivia-Quiz</h2>
                <div className="project-card">
                  <div className="project-card-inner">
                    <span className="description">
                      A trivia quiz application built using React. It fetches
                      trivia questions from an API and allows users to test
                      their knowledge and see their scores.
                      <ul className="skills">
                        <li className="skill">React</li>
                        <li className="skill">Api</li>
                      </ul>
                    </span>
                  </div>
                  <div>
                    <a
                      className="image-container"
                      href="https://justsomefun.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="project-image" src={quiz} alt="quiz" />
                      <span className="view">View Project⟶</span>
                    </a>
                    <div className="connections">
                      <a
                        className="image-container"
                        href="https://justsomefun.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-up-right-from-square"></i>
                      </a>
                      <a
                        className="image-container"
                        href="https://github.com/epinark/Trivia-Quiz"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
