import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Section from "./components/Section";
import "./styles/Navbar.css";
import "./styles/About.css";
import "./styles/Skills.css";
import "./styles/Portfolio.css";
import "./styles/Contact.css";
import "./styles/Home.css";
import "./App.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Section id="about" content={<About />} />
        <Section id="skills" content={<Skills />} />
        <Section id="portfolio" content={<Portfolio />} />
        <Section id="contact" content={<Contact />} />
        <div className="sticky-left">
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
          </div>{" "}
        </div>
        <div className="sticky-right">
          <a
            href="mailto:esrapinarkaya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            esrapinarkaya@gmail.com
          </a>
        </div>
        <footer className="footer">
          <div className="container">
            <span>
              Built with <span className="heart">❤️</span> by Esra Pinar Berkus
              &copy; 2023
            </span>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
