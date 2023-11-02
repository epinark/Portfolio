import UseIntersectionObserver from "./UseIntersectionObserver";

function Section({ id, content }) {
  const { targetRef, isVisible } = UseIntersectionObserver({
    threshold: 0.1,
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
