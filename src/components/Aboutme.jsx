import { useState } from "react";

function Aboutme() {
  const [showAbout, setShowAbout] = useState(false);
  function toggleAbout() {
    setShowAbout(!showAbout);
  }

  return (
    <div>
      <p className="paragraph">
        <span>
          I'm<span> Esra,</span>{" "}
        </span>{" "}
        <br />I was a math teacher who made a career change when I moved to
        Germany two years ago, taking it as an opportunity to explore new
        horizons while leveraging my background. My love for solving challenging
        problems and exploring different ways of solving them led me to embark
        on an ambitious journey as a full-stack web developer. Through my
        education and professional teaching years, I have developed a strong
        foundation in problem solving,{" "}
        <span className="handschrift">analytical thinking,</span> and{" "}
        <span className="handschrift">effective communication.</span>
      </p>
    </div>
  );
}

export default Aboutme;
