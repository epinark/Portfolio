function Contact() {
  return (
    <div className="contact-wrapper">
      <h2>Contact</h2>
      <span className="border"></span>
      <a
        className="contact"
        href="mailto:esrapinarkaya@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="arrow">⟶</span>esrapinarkaya@gmail.com
      </a>
      <a
        className="contact"
        href="https://github.com/epinark"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="arrow">⟶</span>
        github.com/epinark
      </a>
    </div>
  );
}

export default Contact;
