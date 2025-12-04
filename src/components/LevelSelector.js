import React from "react";

const LevelSelector = ({ setLevel, level }) => {
  return (
    <div className="levels_container">
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
      </div>
      <div>
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
      </div>
      <div>
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
