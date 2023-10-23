import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./styles/Navbar.css";
import "./styles/About.css";
import "./styles/Skills.css";
import "./styles/Portfolio.css";
import "./styles/Contact.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <footer className="footer">
          <div className="container">
            <span>&copy; 2023 My App | All rights reserved</span>
            <div className="social-media">
              <a
                className="contacts"
                href="www.linkedin.com/in/esra-pinar-berkus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="contacts"
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
                className="contacts"
              >
                <i className="fa fa-envelope"></i>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
