import React, { useState, useEffect } from "react";
import "../styles/App.css";
import GameBoard from "./GameBoard";
import LevelSelector from "./LevelSelector";

const App = () => {
  const [level, setLevel] = useState("easy");
  const [tiles, setTiles] = useState([]);
  const [tries, setTries] = useState(0);
  const [flippedTiles, setFlippedTiles] = useState([]);
  const [solvedPairs, setSolvedPairs] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const levels = {
    easy: { size: 8, pairs: 4 },
    normal: { size: 16, pairs: 8 },
    hard: { size: 32, pairs: 16 },
  };

  const startNewGame = () => {
    const numPairs = levels[level].pairs;
    const tilesArray = [];
    for (let i = 0; i < numPairs; i++) {
      tilesArray.push(i);
      tilesArray.push(i);
    }
    const shuffledTiles = tilesArray.sort(() => Math.random() - 0.5);
    setTiles(shuffledTiles);
    setTries(0);
    setFlippedTiles([]);
    setSolvedPairs(0);
    setGameStarted(true);
    setGameOver(false);
  };

  const handleTileClick = (index) => {
    if (gameOver || flippedTiles.includes(index) || tiles[index] === null)
      return;

    if (flippedTiles.length < 2) {
      const newFlipped = [...flippedTiles, index];
      setFlippedTiles(newFlipped);

      if (newFlipped.length === 2) {
        setTries(tries + 1);
        const [first, second] = newFlipped;
        if (tiles[first] === tiles[second]) {
          setSolvedPairs((prev) => {
            const newSolved = prev + 1;
            if (newSolved === levels[level].pairs) {
              setGameOver(true);
            }
            return newSolved;
          });
          setFlippedTiles([]);
        } else {
          setTimeout(() => setFlippedTiles([]), 1000);
        }
      }
    }
  };

  // Check if game is solved based on solvedPairs is done in handleTileClick,
  // but we can also check here if we want to be reactive.
  // However, the logic above is fine.

  return (
    <div className="game-container">
      {!gameStarted ? (
        <div className="welcome-screen">
          <h1>Welcome!</h1>
          <LevelSelector level={level} setLevel={setLevel} />
          <button onClick={startNewGame}>Start</button>
        </div>
      ) : (
        <div className="game-screen">
          <h1>GAMe YO</h1>
          <p>Tries: {tries}</p>
          {gameOver && (
            <div className="game-over">
              <h3>ALL SOLVED!</h3>
              <button onClick={() => setGameStarted(false)}>New Game</button>
            </div>
          )}
          <GameBoard
            tiles={tiles}
            flippedTiles={flippedTiles}
            onTileClick={handleTileClick}
          />
        </div>
      )}
    </div>
  );
};

export default App;
