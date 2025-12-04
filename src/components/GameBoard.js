import React from "react";
import Tile from "./Tile";

const GameBoard = ({ tiles, flippedTiles, onTileClick }) => {
  return (
    <div className="cells_container">
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          index={index}
          value={tile}
          isFlipped={flippedTiles.includes(index)}
          onClick={() => onTileClick(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
