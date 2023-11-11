import React, { useState, useEffect } from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";

const Gif = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [hasStartedScrolling, setHasStartedScrolling] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;

    const percentage = 6;

    if (!hasStartedScrolling && scrolled > (windowHeight * percentage) / 100) {
      setHasStartedScrolling(true);
    }

    if (hasStartedScrolling) {
      const imageIndex = Math.ceil(
        (scrolled / windowHeight) * (100 / percentage)
      );
      const newIndex = Math.min(Math.max(imageIndex, 1), 5);

      if (newIndex !== currentImage) {
        setCurrentImage(newIndex);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentImage, hasStartedScrolling]);

  const getImageSource = () => {
    switch (currentImage) {
      case 1:
        return image1;
      case 2:
        return image2;
      case 3:
        return image3;
      case 4:
        return image4;
      case 5:
        return image5;
      default:
        return image1;
    }
  };

  return (
    <div>
      <img src={getImageSource()} alt={`image ${currentImage}`} />
    </div>
  );
};

export default Gif;
