import React from "react";

const LevelSelector = ({ setLevel, level }) => {
  return (
    <div className="levels_container">
      <h1>🎮 Memory Matching Game</h1>
      <p>Select Difficulty:</p>
      <div>
        <label>
          <input
            type="radio"
            name="level"
            value="easy"
            id="easy"
            checked={level === "easy"}
            onChange={() => setLevel("easy")}
          />
          <span>Easy</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="level"
            value="normal"
            id="normal"
            checked={level === "normal"}
            onChange={() => setLevel("normal")}
          />
          <span>Normal</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="level"
            value="hard"
            id="hard"
            checked={level === "hard"}
            onChange={() => setLevel("hard")}
          />
          <span>Hard</span>
        </label>
      </div>
    </div>
  );
};

export default LevelSelector;
