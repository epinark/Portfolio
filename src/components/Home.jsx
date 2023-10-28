import React, { useState, useEffect } from "react";
import sun from "../images/sun.png";

function Home() {
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

  if (greetings < 12) {
    greetingText = "Good Morning";
  } else if (greetings < 16) {
    greetingText = "Good Afternoon";
  } else {
    greetingText = "Good Evening";
  }

  return (
    <div className="header">
      <h1>
        {greetingText}, <span>I am Esra</span>
      </h1>
      <div className="animation">
        <img src={sun} alt="Sun" className="sun" />
      </div>
    </div>
  );
}

export default Home;
