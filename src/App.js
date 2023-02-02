import React from 'react';
import GameList from './components/GameList';
import NavBar from './components/NavBar';
import { GameProvider } from './contexts/GameContext';

function App() {
  return (
    <GameProvider>
      <NavBar />
      <GameList />
    </GameProvider>
  );
}

export default App;
