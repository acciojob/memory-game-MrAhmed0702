import React from "react";

const Tile = ({ value, index, isFlipped, onClick }) => {
  return (
    <div className={`tile ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
      {isFlipped ? value : ""}
    </div>
  );
};

export default Tile;
