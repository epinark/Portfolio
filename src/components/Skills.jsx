import mongo from "../images/mongo.svg";
import postgresql from "../images/postgresql.svg";
import tailwind from "../images/tailwind.svg";
import sqlite from "../images/sqlite.svg";

function Skills() {
  return (
    <div className="tech-container" id="skills">
      <div className="skill-container">
        <div className="upper-skill">
          <h2>My Skills</h2>
          <span className="border-s"></span>
        </div>
      </div>
      <div className="tech-icons-wrapper">
        <div className="tech-icon">
          <div className="icon-outer">
            <i className="fa-brands fa-html5"></i>
          </div>
          <span>HTML5</span>
        </div>
        <div className="tech-icon">
          <div className="icon-outer">
            <i class="fa-brands fa-css3"></i>
          </div>
          <span>CSS3</span>
        </div>
        <div className="tech-icon">
          <div className="icon-outer">
            <i class="fa-brands fa-js"></i>
          </div>
          <span>Javascript</span>
        </div>
        <div className="tech-icon">
          <div className="icon-outer">
            <i class="fa-brands fa-react"></i>
          </div>
          <span>React</span>
        </div>
        <div className="tech-icon">
          <div className="icon-outer">
            <i className="fa-brands fa-node-js"></i>
          </div>
          <span>Node.js</span>
        </div>
        <div className="tech-icon">
          <div className="icon-outer">
            <p>ex</p>
          </div>
          <span>Express.js</span>
        </div>

        <div className="tech-icon">
          <div className="icon-outer">
            <img src={mongo} />
          </div>
          <span>MongoDB</span>
        </div>

        <div className="tech-icon">
          <div className="icon-outer">
            <img src={postgresql} />
          </div>
          <span>PostgreSQL</span>
        </div>

        <div className="tech-icon">
          <div className="icon-outer">
            <img src={tailwind} />
          </div>
          <span>Tailwind CSS</span>
        </div>
        <div className="tech-icon">
          <div className="icon-outer">
            <img src={sqlite} />
          </div>
          <span>SQLite</span>
        </div>

        <div className="tech-icon">
          <div className="icon-outer">
            <i className="fa-brands fa-git-alt"></i>
          </div>
          <span>Git</span>
        </div>

        <div className="tech-icon">
          <div className="icon-outer">
            <i className="fa-brands fa-github"></i>
          </div>
          <span>GitHub</span>
        </div>

        <div className="tech-icon">
          <div className="icon-outer">
            <i className="fa-brands fa-figma"></i>
          </div>
          <span>Figma</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
