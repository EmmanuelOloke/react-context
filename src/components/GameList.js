import React, { useContext } from 'react';
import Game from './Game.js';
import { GameContext } from '../contexts/GameContext.js';

function GameList() {
  const [games] = useContext(GameContext);
  return (
    <div style={{ textAlign: 'center' }}>
      {games.map((game) => (
        <Game name={game.name} cost={game.cost} year={game.year} key={game.id} />
      ))}
    </div>
  );
}

export default GameList;
