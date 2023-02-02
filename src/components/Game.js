import React from 'react';

function Game({ name, cost, year }) {
  return (
    <div>
      <h3>
        {name} (<em>{year}</em>)
      </h3>
      <p>${cost}</p>
    </div>
  );
}

export default Game;
