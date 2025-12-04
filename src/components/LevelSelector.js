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
        Easy
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
        Normal
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
        Hard
      </label>
    </div>
  );
};

export default LevelSelector;
