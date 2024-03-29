import Section from "./Section";
import { useTranslation } from "react-i18next";

import mongo from "../images/mongo.svg";
import postgresql from "../images/postgresql.svg";
import tailwind from "../images/tailwind.svg";
import sqlite from "../images/sqlite.svg";
import taildark from "../images/taildark.svg";
import mongodark from "../images/mongodark.svg";
import postgredark from "../images/postgredark.svg";
import sqlitedark from "../images/sqlitedark.svg";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Skills({ isLightMode }) {
  const { t } = useTranslation();
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef);

  return (
    <div className="tech-container" id="skills" ref={skillRef}>
      <div className="skill-container">
        <Section
          id="underline"
          content={
            <div className="upper-skill">
              <motion.h2
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                {t("myskills")}
              </motion.h2>
              {/* <span className="border-s"></span> */}
            </div>
          }
        />
      </div>
      <motion.div
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="tech-icons-wrapper"
      >
        <div className="tech-icon">
          <div className="icon-outer">
            <i className="fa-brands fa-html5"></i>
          </div>
          <span>HTML5</span>
        </div>
        <div className="tech-icon">
          <div className="icon-outer">
            <i className="fa-brands fa-css3"></i>
          </div>
          <span>CSS3</span>
        </div>
        <div className="tech-icon">
          <div className="icon-outer">
            <i className="fa-brands fa-js"></i>
          </div>
          <span>Javascript</span>
        </div>
        <div className="tech-icon">
          <div className="icon-outer">
            <i className="fa-brands fa-react"></i>
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
            <span>ex</span>
          </div>
          <span>Express.js</span>
        </div>

        <div className="tech-icon">
          <div className="icon-outer">
            {isLightMode ? <img src={mongo} /> : <img src={mongodark} />}
          </div>
          <span>MongoDB</span>
        </div>

        <div className="tech-icon">
          <div className="icon-outer">
            {isLightMode ? <img src={postgresql} /> : <img src={postgredark} />}
          </div>
          <span>PostgreSQL</span>
        </div>

        <div className="tech-icon">
          <div className="icon-outer">
            {isLightMode ? <img src={tailwind} /> : <img src={taildark} />}
          </div>
          <span>Tailwind CSS</span>
        </div>
        <div className="tech-icon">
          <div className="icon-outer">
            {isLightMode ? <img src={sqlite} /> : <img src={sqlitedark} />}
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
      </motion.div>
    </div>
  );
}

export default Skills;
