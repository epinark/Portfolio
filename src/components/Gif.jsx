import React, { useState, useEffect } from "react";

const Gif = () => {
  const [currentImage, setCurrentImage] = useState(1);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;

    const percentage = 6;
    const imageIndex = Math.ceil(
      (scrolled / windowHeight) * (100 / percentage)
    );

    const newIndex = Math.min(Math.max(imageIndex, 1), 5);

    if (newIndex !== currentImage) {
      setCurrentImage(newIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentImage]); // Re-run the effect when currentImage changes

  return (
    <div>
      <img
        src={`src/images/image${currentImage}.jpg`}
        alt={`image ${currentImage}`}
      />
    </div>
  );
};

export default Gif;
