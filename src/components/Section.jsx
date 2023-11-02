// Section.js
import React from "react";
import UseIntersectionObserver from "./UseIntersectionObserver.jsx";
function Section({ id, content }) {
  const { targetRef, isVisible } = UseIntersectionObserver({
    threshold: 0.1, // Adjust as needed
  });

  return (
    <section
      id={id}
      ref={targetRef}
      className={`fade-in-section ${isVisible ? "visible" : ""}`}
    >
      {content}
    </section>
  );
}

export default Section;
