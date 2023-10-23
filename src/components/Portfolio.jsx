import drtime from "../images/drtime.png";
import myip from "../images/myip.png";
import quiz from "../images/quiz.png";

function Portfolio() {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="project-card">
        <h2>DrTime</h2>
        <div className="project-card-inner">
          <span className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            placeat vero at ratione dolore adipisci officia culpa nesciunt
            similique maiores corrupti, reiciendis inventore est deserunt
            mollitia harum cupiditate impedit facere?
            <ul className="skills">
              <li className="skill">React</li>
              <li className="skill">Node.js</li>
              <li className="skill">MongoDB</li>
              <li className="skill">Express</li>
            </ul>
          </span>
          <a
            href="https://drtime.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={drtime} alt="drtime" />
          </a>
          <div className="connections">
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
      <div className="project-card">
        <h2>What's my IP?</h2>
        <div className="project-card-inner">
          <span className="description">
            A small one-page React application that provides the user with
            information about their current IP address, location, and some
            additional details about their country.
            <ul className="skills">
              <li className="skill">React</li>
              <li className="skill">Api</li>
              <li className="skill">Leaflet</li>
            </ul>
          </span>
          <a
            href="https://showmyplace.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={myip} alt="drtime" />
          </a>
          <div className="connections">
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
      <div className="project-card">
        <h2>Trivia Quiz</h2>
        <div className="project-card-inner">
          <span className="description">
            A trivia quiz application built using React. It fetches trivia
            questions from an API and allows users to test their knowledge and
            see their scores.
            <ul className="skills">
              <li className="skill">React</li>
              <li className="skill">Api</li>
            </ul>
          </span>
          <a
            href="https://justsomefun.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={quiz} alt="quiz" />
          </a>
          <div className="connections">
            <a
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
  );
}

export default Portfolio;
