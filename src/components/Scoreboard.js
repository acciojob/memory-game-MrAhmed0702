import React from 'react';

const Scoreboard = ({ tries, solvedPairs }) => {
  return (
    <div className="scoreboard">
      <p>Tries: {tries}</p>
      <p>Solved Pairs: {solvedPairs}</p>
    </div>
  );
};

export default Scoreboard;
