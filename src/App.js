import React, { useState } from 'react';
import './App.css';

function Game({ game, index, removeGame }) {
  return (
    <div classvalue="game">
      {game.text}
      <button onClick={() => removeGame(index)}>刪除</button>
    </div>
  );
}

function GameForm({ addGame }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addGame(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="gameInput"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [games, setGames] = useState([{ text: '' }]);
  const addGame = text => {
    const newGames = [...games, { text }];
    setGames(newGames);
  };
  const removeGame = index => {
    const newGames = [...games];
    newGames.splice(index, 1);
    setGames(newGames);
  };
  return (
    <div className="gameList">
      <GameForm addGame={addGame} />
      {games.map((game, index) => (
        <Game key={index} index={index} game={game} removeGame={removeGame} />
      ))}
    </div>
  );
}

export default App;
