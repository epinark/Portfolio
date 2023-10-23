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
import "./App.css";
import { Route, Routes } from "react-router-dom";
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
      </div>
    </>
  );
}

export default App;
