import React, { useState } from 'react';
import './App.css';

function GameName({ index, addGame, removeGame }) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addGame(value);
    setValue('');
  };
  return (
    <div className="addNewGame">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="gameInput"
          value={value}
          placeholder="請輸入新增遊戲名稱"
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <button onClick={() => removeGame(index)}>刪除</button>
    </div>
  );
}

function App() {
  const [games, setGames] = useState([]);
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
      <button onClick={addGame}>新增遊戲</button>
      {games.map((game, index) => (
        <GameName
          key={index}
          index={index}
          game={game}
          addGame={addGame}
          removeGame={removeGame}
        />
      ))}
      <button>確定</button>
      <button>全部清除</button>
    </div>
  );
}

export default App;
