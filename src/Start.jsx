// Start.jsx

import React, { useState } from "react";

const Start = ({ onOpenClick }) => {
  const handleOpenClick = () => {
    onOpenClick();
  };

  return (
    <div className="start-page">
      <span className="pixelify-sans-1" onClick={handleOpenClick}>
        Click when ready...
      </span>
    </div>
  );
};

export default Start;
