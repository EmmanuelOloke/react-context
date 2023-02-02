import React, { useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [games, setGames] = useState([
    {
      id: 1,
      name: "Assassin's Creed",
      year: '2016',
      cost: '90',
    },
    {
      id: 2,
      name: 'Agent 47',
      year: '2000',
      cost: '40',
    },
    {
      id: 3,
      name: 'Spiderman',
      year: '2018',
      cost: '80',
    },
    {
      id: 4,
      name: 'Call of Duty: Modern Warfare 3',
      year: '2011',
      cost: '105',
    },
    {
      id: 5,
      name: 'Elden Ring',
      year: '2022',
      cost: '60',
    },
  ]);

  return <GameContext.Provider value={[games, setGames]}>{props.children}</GameContext.Provider>;
};
