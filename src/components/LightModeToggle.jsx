import React from "react";

const LightModeToggle = ({ isLightMode, toggleLightMode }) => {
  return (
    <button onClick={toggleLightMode}>
      {isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default LightModeToggle;
