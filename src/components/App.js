import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import GameBoard from './GameBoard';
import LevelSelector from './LevelSelector';
import Scoreboard from './Scoreboard';

const App = () => {
  const [level, setLevel] = useState('easy');
  const [tiles, setTiles] = useState([]);
  const [tries, setTries] = useState(0);
  const [flippedTiles, setFlippedTiles] = useState([]);
  const [solvedPairs, setSolvedPairs] = useState(0);

  const levels = {
    easy: { size: 8, pairs: 4 },
    normal: { size: 16, pairs: 8 },
    hard: { size: 32, pairs: 16 },
  };

  // Function to start a new game
  const startGame = (level) => {
    const numPairs = levels[level].pairs;
    const numTiles = levels[level].size;
    const tilesArray = [];

    // Create pairs of numbers
    for (let i = 0; i < numPairs; i++) {
      tilesArray.push(i);
      tilesArray.push(i);
    }

    // Shuffle tiles
    const shuffledTiles = tilesArray.sort(() => Math.random() - 0.5);
    setTiles(shuffledTiles);
    setTries(0);
    setFlippedTiles([]);
    setSolvedPairs(0);
  };

  // Handle tile click
  const handleTileClick = (index) => {
    if (flippedTiles.length < 2 && !flippedTiles.includes(index)) {
      const newFlipped = [...flippedTiles, index];
      setFlippedTiles(newFlipped);

      if (newFlipped.length === 2) {
        setTries(tries + 1);

        const [first, second] = newFlipped;
        if (tiles[first] === tiles[second]) {
          setSolvedPairs(solvedPairs + 1);
          setFlippedTiles([]);
        } else {
          setTimeout(() => setFlippedTiles([]), 1000);
        }
      }
    }
  };

  useEffect(() => {
    startGame(level);
  }, [level]);

  return (
    <div className="game-container">
      <h1>Memory Game</h1>
      <LevelSelector setLevel={setLevel} />
      <Scoreboard tries={tries} solvedPairs={solvedPairs} />
      <GameBoard tiles={tiles} flippedTiles={flippedTiles} onTileClick={handleTileClick} />
      {solvedPairs === levels[level].pairs && <button onClick={() => startGame(level)}>New Game</button>}
    </div>
  );
};

export default App;
