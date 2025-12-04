import React from 'react';

const LevelSelector = ({ setLevel }) => {
  return (
    <div className="level-selector">
      <label>
        <input type="radio" name="level" value="easy" onChange={() => setLevel('easy')} /> Easy
      </label>
      <label>
        <input type="radio" name="level" value="normal" onChange={() => setLevel('normal')} /> Normal
      </label>
      <label>
        <input type="radio" name="level" value="hard" onChange={() => setLevel('hard')} /> Hard
      </label>
    </div>
  );
};

export default LevelSelector;
