import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

function NavBar() {
  const [games] = useContext(GameContext);
  return (
    <div
      style={{
        backgroundColor: '#3A66DB',
        padding: '0.5rem 0',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '50vw',
          color: 'white',
        }}
      >
        <h3>Favourite Games</h3>
        <p>List of Games: {games.length}</p>
      </div>
    </div>
  );
}

export default NavBar;
