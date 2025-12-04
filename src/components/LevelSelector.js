import React from "react";

const LevelSelector = ({ level, setLevel }) => {
  return (
    <div className="levels_container">
      <label>
        <input
          type="radio"
          name="level"
          value="easy"
          id="easy"
          checked={level === "easy"}
          onChange={() => setLevel("easy")}
        />{" "}
        <span>Easy</span>
      </label>
      <label>
        <input
          type="radio"
          name="level"
          value="normal"
          id="normal"
          checked={level === "normal"}
          onChange={() => setLevel("normal")}
        />{" "}
        <span>Normal</span>
      </label>
      <label>
        <input
          type="radio"
          name="level"
          value="hard"
          id="hard"
          checked={level === "hard"}
          onChange={() => setLevel("hard")}
        />{" "}
        <span>Hard</span>
      </label>
    </div>
  );
};

export default LevelSelector;
